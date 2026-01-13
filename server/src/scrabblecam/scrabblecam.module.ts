import { Module } from '@nestjs/common';
import { ScrabblecamController } from './scrabblecam.controller';

@Module({
  controllers: [ScrabblecamController],
})
export class ScrabblecamModule {}
