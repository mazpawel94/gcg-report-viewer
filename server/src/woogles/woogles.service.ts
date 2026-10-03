import { Injectable, NotFoundException } from '@nestjs/common';
import axios from 'axios';

const GCG_URL = 'https://woogles.io/api/analysis_service.AnalysisService/GetAnalysisResult';
const RECENT_GAMES_URL = 'https://woogles.io/api/game_service.GameMetadataService/GetRecentGames';

const COORD_RE = /^(?:\d{1,2}[A-Za-z]|[A-Za-z]\d{1,2})$/;
const MISTAKE_SIZES = new Set(['MEDIUM', 'LARGE']);
const DEFAULT_LEXICON = 'OSPS52';
const DEFAULT_NUM_GAMES = 50;
const DEFAULT_MIN_GAP = 10;
const FETCH_CONCURRENCY = 5;

interface WordEntry {
  index: number;
  coordinates: string;
  points: number;
  word: string;
  freeLetters: string;
  evaluate: number;
}

export interface MistakePuzzle {
  letters: string;
  words: WordEntry[];
  solution: WordEntry;
  metadata: {
    playerName: string;
    gameId: string;
  };
}

interface GetMistakesOptions {
  numGames?: number;
  lexicon?: string;
  opponent?: string;
  minGap?: number;
}

@Injectable()
export class WooglesService {
  async getGame(gameId: string): Promise<{ turns: unknown[] }> {
    const { data } = await axios.post(GCG_URL, { gameId });

    if (!data?.found || !data?.result?.turns) {
      throw new NotFoundException('Nie znaleziono partii na woogles.io');
    }

    return data.result;
  }

  async getMistakesForPlayer(username: string, options: GetMistakesOptions = {}): Promise<MistakePuzzle[]> {
    const numGames = options.numGames ?? DEFAULT_NUM_GAMES;
    const lexicon = options.lexicon ?? DEFAULT_LEXICON;
    const opponent = options.opponent;
    const minGap = options.minGap ?? DEFAULT_MIN_GAP;

    const gameIds = await this.fetchRecentGameIds(username, numGames, lexicon, opponent);

    const puzzles: MistakePuzzle[] = [];
    for (let i = 0; i < gameIds.length; i += FETCH_CONCURRENCY) {
      const batch = gameIds.slice(i, i + FETCH_CONCURRENCY);
      const analyses = await Promise.all(batch.map((gameId) => this.fetchAnalysis(gameId)));
      for (const entry of analyses) {
        if (!entry) continue;
        puzzles.push(...this.extractPuzzlesFromGame(entry.analysis, entry.gameId, minGap));
      }
    }

    return puzzles;
  }

  private async fetchRecentGameIds(
    username: string,
    numGames: number,
    lexicon?: string,
    opponent?: string,
  ): Promise<string[]> {
    const { data } = await axios.post(RECENT_GAMES_URL, { username, numGames });
    const games: any[] = data?.game_info ?? [];

    return games
      .filter((game) => !lexicon || game.game_request?.lexicon === lexicon)
      .filter((game) => !opponent || (game.players ?? []).some((p: any) => p.nickname === opponent))
      .map((game) => game.game_id);
  }

  private async fetchAnalysis(gameId: string): Promise<{ gameId: string; analysis: any } | null> {
    try {
      const { data } = await axios.post(GCG_URL, { gameId });
      return { gameId, analysis: data };
    } catch {
      return null;
    }
  }

  private parseMove(moveStr: string | undefined): [string, string] {
    const trimmed = (moveStr ?? '').trim();
    const spaceIdx = trimmed.indexOf(' ');
    if (spaceIdx === -1) return ['', trimmed];
    const coord = trimmed.slice(0, spaceIdx);
    const rest = trimmed.slice(spaceIdx + 1);
    return COORD_RE.test(coord) ? [coord, rest] : ['', trimmed];
  }

  private qualifiesAsMistake(turn: any, minGap: number): boolean {
    if (!MISTAKE_SIZES.has(turn.mistake_size)) return false;
    const plays: any[] = turn.top_sim_plays ?? [];
    if (plays.length < 2) return true;
    const topScore = plays[0]?.score ?? 0;
    return plays.slice(1).every((p) => topScore - (p?.score ?? 0) >= minGap);
  }

  private buildWordEntry(index: number, coordinates: string, word: string, points: number): WordEntry {
    return { index, coordinates, points, word, freeLetters: '', evaluate: points };
  }

  private extractPuzzlesFromGame(analysis: any, gameId: string, minGap: number): MistakePuzzle[] {
    const puzzles: MistakePuzzle[] = [];
    const history: WordEntry[] = [];
    let nextIndex = 1;

    const turns: any[] = analysis?.result?.turns ?? [];
    for (const turn of turns) {
      if (this.qualifiesAsMistake(turn, minGap)) {
        const bestPlay = (turn.top_sim_plays ?? [])[0];
        if (bestPlay) {
          const [solCoord, solWord] = this.parseMove(bestPlay.move_description);
          const solution = this.buildWordEntry(nextIndex, solCoord, solWord, bestPlay.score ?? 0);
          if (solution.points > 0) {
            puzzles.push({
              letters: turn.rack ?? '',
              words: history.map((w) => ({ ...w })),
              solution,
              metadata: { playerName: turn.player_name, gameId },
            });
          }
        }
      }

      const [playedCoord, playedWord] = this.parseMove(turn.played_move);
      if (playedCoord) {
        history.push(this.buildWordEntry(nextIndex, playedCoord, playedWord, turn.played_score ?? 0));
        nextIndex += 1;
      }
    }

    return puzzles;
  }
}
