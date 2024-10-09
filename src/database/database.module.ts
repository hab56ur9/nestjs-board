import { Module } from '@nestjs/common';
import { databaseProviders } from './database.providers';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Board } from 'src/board/entities/board.entity';
import { User } from 'src/users/entities/user.entity';

@Module({
  // imports:[TypeOrmModule.forRoot(
  //   {
  //     type: 'postgres',
  //     host: 'localhost',
  //     port: 5432,
  //     username: 'postgres',
  //     password: 'postgres',
  //     database: 'postgres',
  //     entities: [
  //         Board,Comment,User
  //     ],
  //   }
  // )],
  providers: [...databaseProviders],
  exports:[...databaseProviders],
})
export class DatabaseModule {}
