import { Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { OAuth2Client } from 'google-auth-library';
import { DataSource, Repository } from 'typeorm';
import { UserDiagram } from '../user-diagram/user-diagram.entity';
import { User } from '../users/user.entity';
import { AnonymousDto } from './dto/anonymous.dto';
import { GoogleCodeDto } from './dto/google-code.dto';
import { GoogleDto } from './dto/google.dto';

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);
  private readonly googleClient: OAuth2Client;

  constructor(
    @InjectRepository(User)
    private readonly userRepo: Repository<User>,
    private readonly jwtService: JwtService,
    private readonly dataSource: DataSource,
  ) {
    this.googleClient = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
  }

  // ─────────────────────────────────────────────
  // ANONYMOUS
  // ─────────────────────────────────────────────

  async handleAnonymous(dto: AnonymousDto): Promise<{ accessToken: string }> {
    const { deviceToken } = dto;

    // Znajdź istniejące konto lub utwórz nowe
    let user = await this.userRepo.findOne({ where: { deviceToken } });

    if (!user) {
      user = this.userRepo.create({
        deviceToken,
        isAnonymous: true,
        googleId: null,
        email: null,
        displayName: null,
      });
      await this.userRepo.save(user);
      this.logger.log(`Created anonymous user: ${user.id}`);
    }

    return { accessToken: this.signToken(user) };
  }

  // ─────────────────────────────────────────────
  // GOOGLE
  // ─────────────────────────────────────────────

  async handleGoogleCode(dto: GoogleCodeDto, currentUser: User): Promise<{ accessToken: string }> {
    const tokenRes = await fetch('https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        code: dto.code,
        client_id: process.env.GOOGLE_CLIENT_ID!,
        client_secret: process.env.GOOGLE_CLIENT_SECRET!,
        grant_type: 'authorization_code',
        ...(dto.codeVerifier ? { code_verifier: dto.codeVerifier } : {}),
      }).toString(),
    });
    const tokenData = await tokenRes.json();
    if (!tokenData.id_token) throw new UnauthorizedException('No id_token from Google');

    return this.handleGoogle({ idToken: tokenData.id_token }, currentUser);
  }

  async handleGoogle(dto: GoogleDto, currentUser: User): Promise<{ accessToken: string }> {
    const googlePayload = await this.verifyGoogleToken(dto.idToken);

    const { sub: googleId, email, name, picture } = googlePayload;

    const existingGoogleUser = await this.userRepo.findOne({
      where: { googleId },
    });

    // Przypadek 1: Już jesteś zalogowany kontem Google — nic nie rób
    if (currentUser.googleId === googleId) {
      return { accessToken: this.signToken(currentUser) };
    }

    // Przypadek 2: Konto Google istnieje w bazie → merge i zwróć konto Google
    if (existingGoogleUser) {
      const mergedUser = await this.mergeAccounts(currentUser, existingGoogleUser);
      return { accessToken: this.signToken(mergedUser) };
    }

    // Przypadek 3: Nowe konto Google → upgrade obecnego konta anonymous
    const upgradedUser = await this.upgradeToGoogle(currentUser, {
      googleId,
      email: email ?? null,
      displayName: name ?? null,
      avatarUrl: picture ?? null,
    });
    return { accessToken: this.signToken(upgradedUser) };
  }

  // ─────────────────────────────────────────────
  // UPGRADE: anonymous → Google (ten sam User, nowe dane)
  // ─────────────────────────────────────────────

  private async upgradeToGoogle(
    anonymousUser: User,
    googleData: {
      googleId: string;
      email: string | null;
      displayName: string | null;
      avatarUrl: string | null;
    },
  ): Promise<User> {
    anonymousUser.googleId = googleData.googleId;
    anonymousUser.email = googleData.email;
    anonymousUser.displayName = googleData.displayName;
    anonymousUser.isAnonymous = false;
    // deviceToken zostawiamy — urządzenie nadal jest powiązane

    const saved = await this.userRepo.save(anonymousUser);
    this.logger.log(`Upgraded anonymous user ${anonymousUser.id} to Google account`);
    return saved;
  }

  private async mergeAccounts(anonymousUser: User, googleUser: User): Promise<User> {
    // Nie merge'uj jeżeli to to samo konto
    if (anonymousUser.id === googleUser.id) return googleUser;
    // Transakcja: przenieś TaskResults, usuń anonymous
    await this.dataSource.transaction(async (manager) => {
      await this.resolveUserDiagramConflicts(manager, anonymousUser.id, googleUser.id);
      await manager.update(UserDiagram, { userId: anonymousUser.id }, { userId: googleUser.id });
      // Przypisz deviceToken do konta Google (dla tego urządzenia)
      // if (anonymousUser.deviceToken) {
      //   googleUser.deviceToken = anonymousUser.deviceToken;
      //   await manager.save(User, googleUser);
      // }
      // Usuń konto anonymous
      await manager.delete(User, { id: anonymousUser.id });
    });

    return this.userRepo.findOneOrFail({ where: { id: googleUser.id } });
  }
  // ─────────────────────────────────────────────
  // KONFLIKT: to samo zadanie rozwiązane na obu kontach
  // Strategia: zachowaj starsze
  // ─────────────────────────────────────────────
  private async resolveUserDiagramConflicts(
    manager: any,
    anonymousUserId: string,
    googleUserId: string,
  ): Promise<void> {
    // Znajdź zduplikowane zadania (po taskId) między kontami
    const duplicates = (await manager.query(
      `
      SELECT
        a."diagramId",
        a.id            AS anon_id,
        g.id            AS google_id,
        a."createdAt"   AS anon_created_at,
        g."createdAt"   AS google_created_at,
        a."isLiked"     AS anon_is_liked,
        g."isLiked"     AS google_is_liked
      FROM user_diagram a
      JOIN user_diagram g
        ON a."diagramId" = g."diagramId"
      AND a."userId" = $1
      AND g."userId" = $2
    `,
      [anonymousUserId, googleUserId],
    )) as {
      diagramId: string;
      anon_id: string;
      google_id: string;
      anon_created_at: Date;
      google_created_at: Date;
      anon_is_liked: boolean;
      google_is_liked: boolean;
    }[];

    for (const dup of duplicates) {
      const anonIsOlder = new Date(dup.anon_created_at) < new Date(dup.google_created_at);
      const isLiked = dup.anon_is_liked || dup.google_is_liked;
      if (anonIsOlder) {
        // Starszy jest rekord anonymous - przepnij go na konto Google, usuń rekord Google
        await manager.update(UserDiagram, { id: dup.anon_id }, { userId: googleUserId, isLiked });
        await manager.delete(UserDiagram, { id: dup.google_id });
      } else {
        // Starszy jest rekord Google (lub równy) - zostaje bez zmian, usuń rekord anonymous
        if (isLiked) await manager.update(UserDiagram, { id: dup.google_id }, { isLiked: true });
        await manager.delete(UserDiagram, { id: dup.anon_id });
      }
    }
  }
  // ─────────────────────────────────────────────
  // HELPERS
  // ─────────────────────────────────────────────

  private signToken(user: User): string {
    return this.jwtService.sign({
      sub: user.id,
      isAnonymous: user.isAnonymous,
    });
  }

  private async verifyGoogleToken(idToken: string) {
    try {
      const ticket = await this.googleClient.verifyIdToken({
        idToken,
        audience: process.env.GOOGLE_CLIENT_ID,
      });
      const payload = ticket.getPayload();
      if (!payload) throw new Error('Empty payload');
      return payload;
    } catch (err: any) {
      this.logger.warn(`Invalid Google token: ${err.message}`);
      throw new UnauthorizedException('Invalid Google ID token');
    }
  }
}
