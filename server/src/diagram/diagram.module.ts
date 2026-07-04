import { CacheModule } from '@nestjs/cache-manager';
import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { Tag } from '../tag/tag.entity';
import { DiagramController } from './diagram.controller';
import { Diagram } from './diagram.entity';
import { DiagramService } from './diagram.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Diagram, Tag]),
    CacheModule.register({
      ttl: 30 * 24 * 60 * 60 * 1000,
    }),
  ],
  controllers: [DiagramController],
  providers: [DiagramService],
})
export class DiagramModule {}
