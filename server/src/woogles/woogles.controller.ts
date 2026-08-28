import { Controller, Get, Param } from '@nestjs/common';
import { WooglesService } from './woogles.service';

@Controller('woogles')
export class WooglesController {
  constructor(private readonly wooglesService: WooglesService) {}

  @Get(':gameId')
  async getGame(@Param('gameId') gameId: string) {
    return this.wooglesService.getGame(gameId);
  }
}
