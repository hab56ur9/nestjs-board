import { Controller, Post, Body} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { FormData } from '../auth/decorator/form-data.decorator';
import { LoginUserDto } from './dto/login-user.dto';

@Controller('api/v1/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}


}
