import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DiagramModule } from './diagram/diagram.module';
import { config } from './orm.config';

@Module({
  imports: [TypeOrmModule.forRoot(config), DiagramModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
