import { Injectable } from '@nestjs/common';
import { User } from './user.entity';

@Injectable()
export class UserService {
  async getUsers(): Promise<User[]> {
    return User.find({});
  }
}
