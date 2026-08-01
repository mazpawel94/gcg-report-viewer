import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';
import axios from 'axios';
import * as cheerio from 'cheerio';
import { Tournament } from './interfaces/tournament.interface';
import { TournamentGame } from './interfaces/tournament-game.interface';

const BASE_URL = 'https://scrabble.stats.org.pl';
const TOURNAMENTS_CACHE_KEY = 'tournaments-list';
const TOURNAMENT_GAMES_CACHE_KEY_PREFIX = 'tournament-games-';

@Injectable()
export class TournamentsService {
  constructor(@Inject(CACHE_MANAGER) private readonly cacheManager: Cache) {}

  async getTournaments(): Promise<Tournament[]> {
    const cached = await this.cacheManager.get<Tournament[]>(TOURNAMENTS_CACHE_KEY);
    if (cached) return cached;

    const { data } = await axios.get(`${BASE_URL}/gcg_all.php`, {
      params: { g: 't', s: -2, c: 'nocache' },
      responseType: 'text',
    });

    const $ = cheerio.load(data);
    const tournaments: Tournament[] = [];

    $('table tr').each((_, row) => {
      if ($(row).attr('id') === 'sum') return;

      const cells = $(row).find('td');
      if (cells.length < 3) return;

      const link = cells.eq(1).find('a');
      const href = link.attr('href');
      if (!href) return;

      const id = new URL(href, BASE_URL).searchParams.get('t');
      if (!id) return;

      tournaments.push({
        id,
        shortName: link.text().trim(),
        fullName: link.attr('title')?.trim() ?? '',
        gamesCount: parseInt(cells.eq(2).text().trim(), 10) || 0,
      });
    });

    await this.cacheManager.set(TOURNAMENTS_CACHE_KEY, tournaments);
    return tournaments;
  }

  async getTournamentGames(tournamentId: string): Promise<TournamentGame[]> {
    const cacheKey = `${TOURNAMENT_GAMES_CACHE_KEY_PREFIX}${tournamentId}`;
    const cached = await this.cacheManager.get<TournamentGame[]>(cacheKey);
    if (cached) return cached;

    const { data } = await axios.get(`${BASE_URL}/gcg_allf.php`, {
      params: { t: tournamentId },
      responseType: 'text',
    });

    const $ = cheerio.load(data);
    const games: TournamentGame[] = [];

    $('table tr').each((_, row) => {
      const cells = $(row).find('td');
      if (cells.length < 7) return;

      const player1Link = cells.eq(4).find('a');
      const player2Link = cells.eq(5).find('a');
      const scoreLink = cells.eq(6).find('a');

      const player1Id = this.getQueryParam(player1Link.attr('href'), 'p');
      const player2Id = this.getQueryParam(player2Link.attr('href'), 'p');
      const scoreHref = scoreLink.attr('href');
      if (!player1Id || !player2Id || !scoreHref) return;

      const scoreMatch = scoreLink.text().match(/(\d+)\s*:\s*(\d+)/);
      if (!scoreMatch) return;

      const scoreUrl = new URL(scoreHref, BASE_URL);
      const round = parseInt(scoreUrl.searchParams.get('runda') ?? '', 10);
      const p1 = parseInt(scoreUrl.searchParams.get('p1') ?? '', 10);
      const p2 = parseInt(scoreUrl.searchParams.get('p2') ?? '', 10);

      games.push({
        id: parseInt(cells.eq(0).text().trim(), 10) || 0,
        round,
        table: parseInt(cells.eq(3).text().trim(), 10) || 0,
        player1: { id: parseInt(player1Id, 10), name: player1Link.text().trim() },
        player2: { id: parseInt(player2Id, 10), name: player2Link.text().trim() },
        score1: parseInt(scoreMatch[1], 10),
        score2: parseInt(scoreMatch[2], 10),
        gcgUrl: `/tournaments/${tournamentId}/games/${round}/${p1}/${p2}`,
      });
    });

    await this.cacheManager.set(cacheKey, games);
    return games;
  }

  async getGame(tournamentId: string, round: number, p1: number, p2: number): Promise<string> {
    const { data } = await axios.get(`${BASE_URL}/gcg/download.php`, {
      params: { turniej: tournamentId, runda: round, p1, p2 },
      responseType: 'text',
    });

    if (!data || !data.includes('#player1')) {
      throw new NotFoundException('Nie znaleziono zapisu partii');
    }

    return data;
  }

  private getQueryParam(href: string | undefined, key: string): string | null {
    if (!href) return null;
    return new URL(href, BASE_URL).searchParams.get(key);
  }
}
