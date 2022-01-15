import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DiagramModule } from './diagram/diagram.module';
import { config } from '../orm.config';
import { TagModule } from './tag/tag.module';

@Module({
  imports: [TypeOrmModule.forRoot(config), DiagramModule, TagModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
