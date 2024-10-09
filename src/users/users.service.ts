import { Inject, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';


@Injectable()
export class UsersService {
  constructor(
    @Inject('USERS_REPOSITORY')
    private usersRepo: Repository<User>,
  ) {}

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
