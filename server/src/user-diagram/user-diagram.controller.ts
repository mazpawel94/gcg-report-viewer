import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';

import { CreateUserDiagramDto } from './dto/create-user-diagram.dto';
import { UpdateIsLikedDto } from './dto/update-is-liked.dto';
import { UserStatsDto } from './dto/user-stats.dto';
import { UserDiagram } from './user-diagram.entity';
import { UserDiagramService } from './user-diagram.service';

@Controller('user-diagram')
export class UserDiagramController {
  constructor(private readonly userDiagramService: UserDiagramService) {}

  @Post()
  async createUserDiagram(@Body() newUserDiagram: CreateUserDiagramDto): Promise<UserDiagram> {
    return this.userDiagramService.createUserDiagram(newUserDiagram);
  }

  @Patch('like')
  async toggleLike(@Body() dto: UpdateIsLikedDto): Promise<UserDiagram> {
    return this.userDiagramService.updateIsLiked(dto);
  }
  @Get(':userId/stats')
  async getUserStats(@Param('userId') userId: string): Promise<UserStatsDto> {
    return this.userDiagramService.getUserStats(userId);
  }
}
