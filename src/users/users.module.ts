import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { usersProviders } from './users.providers';
import { DatabaseModule } from 'src/database/database.module';
import { JwtModule } from '@nestjs/jwt';


@Module({
  imports: [
    DatabaseModule
    ,JwtModule.register({ 
      secret:"nestjs-board",
      signOptions: { expiresIn: '60m' },
      }),
  ],
  controllers: [UsersController],
  providers: [
    ...usersProviders,
    UsersService],
  exports:[UsersService],
})
export class UsersModule {}
