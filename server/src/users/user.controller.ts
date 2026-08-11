import { Body, Controller, Get, Patch, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { UserService } from './users.service';
import { User } from './user.entity';
import { UpdateNickDto } from './dto/update-nick.dto';
import { CurrentUser } from '../auth/decorators/current-user.decorator';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getUsers(): Promise<User[]> {
    return this.userService.getUsers();
  }

  @Patch('nick')
  @UseGuards(AuthGuard('jwt'))
  async updateNick(@Body() dto: UpdateNickDto, @CurrentUser() user: User): Promise<User> {
    return this.userService.updateNick(user.id, dto.nick);
  }
}
