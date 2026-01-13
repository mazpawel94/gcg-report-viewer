import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from '../orm.config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DiagramModule } from './diagram/diagram.module';
import { MacondoModule } from './macondo/macondo.module';
import { ScrabblecamModule } from './scrabblecam/scrabblecam.module';
import { TagModule } from './tag/tag.module';

@Module({
  imports: [TypeOrmModule.forRoot(config), DiagramModule, TagModule, MacondoModule, ScrabblecamModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
