import { Injectable, ConflictException, UnauthorizedException, Logger } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OAuth2Client } from 'google-auth-library';
import { User } from '../users/user.entity';
import { AnonymousDto } from './dto/anonymous.dto';
import { GoogleDto } from './dto/google.dto';

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);
  private readonly googleClient: OAuth2Client;

  constructor(
    @InjectRepository(User)
    private readonly userRepo: Repository<User>,

    private readonly jwtService: JwtService,
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
    // if (existingGoogleUser) {
    //   const mergedUser = await this.mergeAccounts(currentUser, existingGoogleUser);
    //   return { accessToken: this.signToken(mergedUser) };
    // }

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
