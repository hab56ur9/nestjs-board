import { Inject, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USERS_REPOSITORY')
    private usersRepo: Repository<User>,
    private jwtService: JwtService
  ) {}

  async signIn(
    email: string,
    pass: string,
  ): Promise<{ access_token: string }> {
    const user = await this.findUserByEmail(email);
    console.log(user);
    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }
    const payload = { sub: user.email, useremail: user.email };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
  // 유저 정보
  async findUserByEmail(email: string): Promise<User> {
    const user = await this.usersRepo.findOne({ where: { email } });
    if (!user) {
      throw new NotFoundException(`User with email:${email} not found.`);
    }
    return user;
  }
  // 유저 생성
  async createUser(createUserDto: CreateUserDto): Promise<User> {
    return this.usersRepo.save(createUserDto);
  }
}
