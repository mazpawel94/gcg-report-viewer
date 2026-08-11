import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from './user.entity';

@Injectable()
export class UserService {
  async getUsers(): Promise<User[]> {
    return User.find({});
  }

  async updateNick(userId: string, nick: string): Promise<User> {
    const user = await User.findOneBy({ id: userId });
    if (!user) {
      throw new NotFoundException('User not found');
    }

    user.nick = nick;
    return user.save();
  }
}
