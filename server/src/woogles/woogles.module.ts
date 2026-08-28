import { Module } from '@nestjs/common';
import { WooglesController } from './woogles.controller';
import { WooglesService } from './woogles.service';

@Module({
  controllers: [WooglesController],
  providers: [WooglesService],
})
export class WooglesModule {}
