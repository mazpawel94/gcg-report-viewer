import { Body, Controller, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';

import { CreateUserDiagramDto } from './dto/create-user-diagram.dto';
import { UpdateIsLikedDto } from './dto/update-is-liked.dto';
import { UserStatsDto } from './dto/user-stats.dto';
import { UserDiagram } from './user-diagram.entity';
import { UserDiagramService } from './user-diagram.service';
import { AuthGuard } from '@nestjs/passport';
import { User } from '../users/user.entity';
import { CurrentUser } from '../auth/decorators/current-user.decorator';
import { SyncResponseDto } from './dto/sync-response.dto';

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

  @Get('sync')
  @UseGuards(AuthGuard('jwt'))
  async sync(@CurrentUser() user: User): Promise<SyncResponseDto> {
    return this.userDiagramService.getSyncData(user.id);
  }
  
  @Get(':userId/stats')
  async getUserStats(@Param('userId') userId: string): Promise<UserStatsDto> {
    return this.userDiagramService.getUserStats(userId);
  }
}
