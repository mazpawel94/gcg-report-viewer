import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Diagram } from '../diagram/diagram.entity';
import { User } from '../users/user.entity';
import { UserDiagramController } from './user-diagram.controller';
import { UserDiagramService } from './user-diagram.service';

@Module({
  imports: [TypeOrmModule.forFeature([Diagram, User])],
  controllers: [UserDiagramController],
  providers: [UserDiagramService],
})
export class UserDiagramModule {}
