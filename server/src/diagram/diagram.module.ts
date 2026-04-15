import { Module } from '@nestjs/common';
import { DiagramController } from './diagram.controller';
import { DiagramService } from './diagram.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Diagram } from './diagram.entity';
import { Tag } from '../tag/tag.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Diagram, Tag])],
  controllers: [DiagramController],
  providers: [DiagramService],
})
export class DiagramModule {}
