import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BoardModule } from './board/board.module';

import { BoardsModule } from './boards/boards.module';

import { CommentModule } from './comment/comment.module';
import { UsersModule } from './users/users.module';


@Module({
  imports: [BoardModule, BoardsModule, CommentModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
