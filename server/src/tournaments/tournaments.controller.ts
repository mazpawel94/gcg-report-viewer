import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { TournamentsService } from './tournaments.service';
import { Tournament } from './interfaces/tournament.interface';
import { TournamentGame } from './interfaces/tournament-game.interface';

@Controller('tournaments')
export class TournamentsController {
  constructor(private readonly tournamentsService: TournamentsService) {}

  @Get()
  async getTournaments(): Promise<Tournament[]> {
    return this.tournamentsService.getTournaments();
  }

  @Get(':id/games')
  async getTournamentGames(@Param('id') id: string): Promise<TournamentGame[]> {
    return this.tournamentsService.getTournamentGames(id);
  }

  @Get(':id/games/:round/:p1/:p2')
  async getGame(
    @Param('id') id: string,
    @Param('round', ParseIntPipe) round: number,
    @Param('p1', ParseIntPipe) p1: number,
    @Param('p2', ParseIntPipe) p2: number,
  ): Promise<{ gcg: string }> {
    const gcg = await this.tournamentsService.getGame(id, round, p1, p2);
    return { gcg };
  }
}
