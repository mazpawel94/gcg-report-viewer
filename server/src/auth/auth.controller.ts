import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { CurrentUser } from './decorators/current-user.decorator';
import { AnonymousDto } from './dto/anonymous.dto';
import { GoogleDto } from './dto/google.dto';
import { User } from '../users/user.entity';
import { GoogleCodeDto } from './dto/google-code.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('anonymous')
  anonymous(@Body() dto: AnonymousDto) {
    return this.authService.handleAnonymous(dto);
  }

  @Post('google/code')
  @UseGuards(AuthGuard('jwt'))
  googleCode(@Body() dto: GoogleCodeDto, @CurrentUser() user: User) {
    return this.authService.handleGoogleCode(dto, user);
  }

  @Post('google')
  @UseGuards(AuthGuard('jwt')) // wymaga aktywnego JWT (anonymous lub Google)
  google(@Body() dto: GoogleDto, @CurrentUser() user: User) {
    return this.authService.handleGoogle(dto, user);
  }
}
