import { Controller, Post, Body} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { FormData } from './form-data.decorator';
import { LoginUserDto } from './dto/login-user.dto';

@Controller('api/v1/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('sign-up')
  sign_up( @FormData() createUserDto: CreateUserDto) {
      console.log(createUserDto);    
      return this.usersService.createUser(createUserDto);
  }
  @Post('login')
  sign_in(@FormData() LoginUserDto: LoginUserDto) {
      console.log(LoginUserDto);  
      return this.usersService.signIn(LoginUserDto.email,LoginUserDto.password);
  }
}
