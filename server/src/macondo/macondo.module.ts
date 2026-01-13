import { Module } from '@nestjs/common';
import { MacondoController } from './macondo.controller';
import { MacondoService } from './macondo.service';

@Module({
  controllers: [MacondoController],
  providers: [MacondoService],
})
export class MacondoModule {}