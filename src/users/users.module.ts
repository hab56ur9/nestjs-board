import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { usersProviders } from './users.providers';
import { DatabaseModule } from 'src/database/database.module';
import { JwtModule } from '@nestjs/jwt';


@Module({
  imports: [DatabaseModule,JwtModule],
  controllers: [UsersController],
  providers: [
    ...usersProviders,
    UsersService],
})
export class UsersModule {}
