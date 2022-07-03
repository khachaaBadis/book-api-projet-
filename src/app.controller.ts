import { Controller, Get,Request, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './jwt/auth/auth.service';
import { LocalAuthGuard } from './jwt/auth/local-auth.guard';

@Controller()
export class AppController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }
  
}
