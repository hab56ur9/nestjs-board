import { Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';

import { SignInDto } from './dto/sign-in.dto';
import { SignUpDto } from './dto/sign-up.dto';
import { FormData } from './decorator/form-data.decorator';

@Controller('api/v1/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  
    @Post('sign-in')
    signIn(@FormData() signInDto: SignInDto) {
        return this.authService.signIn(signInDto);
    }

    @Post('sign-up')
    signUp(@FormData() signUpDto:SignUpDto) {
        return this.authService.signUp(signUpDto);
    }
}
