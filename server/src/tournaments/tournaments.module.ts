import { CacheModule } from '@nestjs/cache-manager';
import { Module } from '@nestjs/common';
import { TournamentsController } from './tournaments.controller';
import { TournamentsService } from './tournaments.service';

@Module({
  imports: [
    CacheModule.register({
      ttl: 60 * 60 * 1000,
    }),
  ],
  controllers: [TournamentsController],
  providers: [TournamentsService],
})
export class TournamentsModule {}
