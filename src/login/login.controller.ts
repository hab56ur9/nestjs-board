import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LoginService } from './login.service';
import { CreateLoginDto } from './dto/create-login.dto';
import { UpdateLoginDto } from './dto/update-login.dto';

@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}
  
  // 새로운 로그인 시도
  @Post()
  create(@Body() createLoginDto: CreateLoginDto) {
    return "try login"
  }
  // 로그인 페이지 반환
  @Get()
  findAll() {
    return "this request must return login page"
  }
}
