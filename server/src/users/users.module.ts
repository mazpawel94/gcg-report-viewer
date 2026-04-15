import { Module } from '@nestjs/common';
import { UserService } from './users.service';

@Module({
  controllers: [UserModule],
  providers: [UserService],
})
export class UserModule {}
