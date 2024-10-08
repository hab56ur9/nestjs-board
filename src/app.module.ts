import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BoardModule } from './board/board.module';
import { DatabaseModule } from './database/database.module';
import { BoardsModule } from './boards/boards.module';
import { LoginModule } from './login/login.module';
import { CommentModule } from './comment/comment.module';


@Module({
  imports: [BoardModule, DatabaseModule, BoardsModule, LoginModule, CommentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
