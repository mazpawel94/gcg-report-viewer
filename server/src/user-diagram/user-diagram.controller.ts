import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserDiagramService } from './user-diagram.service';
import { CreateUserDiagramDto } from './dto/create-user-diagram.dto';
import { UserDiagram } from './user-diagram.entity';
import { UserStatsDto } from './dto/user-stats.dto';

@Controller('user-diagram')
export class UserDiagramController {
  constructor(private readonly userDiagramService: UserDiagramService) {}

  @Post()
  async createUserDiagram(@Body() newUserDiagram: CreateUserDiagramDto): Promise<UserDiagram> {
    return this.userDiagramService.createUserDiagram(newUserDiagram);
  }

  @Get(':userId/stats')
  async getUserStats(@Param('userId') userId: string): Promise<UserStatsDto> {
    return this.userDiagramService.getUserStats(userId);
  }
}
