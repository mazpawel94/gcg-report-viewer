import { Controller, Get, Param, Query } from '@nestjs/common';
import { WooglesService, MistakePuzzle } from './woogles.service';

@Controller('woogles')
export class WooglesController {
  constructor(private readonly wooglesService: WooglesService) {}

  @Get('mistakes/:username')
  async getMistakes(
    @Param('username') username: string,
    @Query('numGames') numGames?: string,
    @Query('lexicon') lexicon?: string,
    @Query('opponent') opponent?: string,
    @Query('minGap') minGap?: string,
  ): Promise<MistakePuzzle[]> {
    return this.wooglesService.getMistakesForPlayer(username, {
      numGames: numGames ? parseInt(numGames, 10) : undefined,
      lexicon,
      opponent,
      minGap: minGap ? parseInt(minGap, 10) : undefined,
    });
  }

  @Get(':gameId')
  async getGame(@Param('gameId') gameId: string) {
    return this.wooglesService.getGame(gameId);
  }
}
