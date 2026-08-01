import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from '../orm.config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { DiagramModule } from './diagram/diagram.module';
import { MacondoModule } from './macondo/macondo.module';
import { ScrabblecamModule } from './scrabblecam/scrabblecam.module';
import { TagModule } from './tag/tag.module';
import { TournamentsModule } from './tournaments/tournaments.module';
import { UserDiagramModule } from './user-diagram/user-diagram.module';
import { UserModule } from './users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(config),
    DiagramModule,
    TagModule,
    MacondoModule,
    ScrabblecamModule,
    UserModule,
    UserDiagramModule,
    AuthModule,
    TournamentsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
