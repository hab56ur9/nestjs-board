import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';    
import { SignInDto } from './dto/sign-in.dto';
import { SignUpDto } from './dto/sign-up.dto';

@Injectable()
export class AuthService {
    constructor(
        private readonly usersService: UsersService
        ,private readonly jwtService: JwtService
    ) {}

    async signIn(signInDto:SignInDto): Promise<{ access_token: string }> {
        //unpacking
        const { email, password } = signInDto;
        const user = await this.usersService.findUserByEmail(email);

        if (user?.password !== password) {
            throw new UnauthorizedException();
        }
        const payload = { sub: user.email, username: user.name };
        return {
            access_token: await this.jwtService.signAsync(payload),
        };
    }
    async signUp(signUpDto:SignUpDto): Promise<void> {
        //unpacking
        await this.usersService.createUser(signUpDto);
    }
}
