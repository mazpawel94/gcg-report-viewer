import { Controller, Get, Param } from '@nestjs/common';

import { ChallengeResultDto } from './dto/challenge-result.dto';
import { UserDiagramService } from './user-diagram.service';

@Controller('challenge-results')
export class ChallengeResultsController {
  constructor(private readonly userDiagramService: UserDiagramService) {}

  @Get(':date')
  async getChallengeResults(@Param('date') date: string): Promise<ChallengeResultDto[]> {
    return this.userDiagramService.getChallengeResults(date);
  }
}
