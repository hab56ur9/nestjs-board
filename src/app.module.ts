import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BoardModule } from './board/board.module';


import { CommentModule } from './comment/comment.module';
import { UsersModule } from './users/users.module';
import { DatabaseModule } from './database/database.module';




@Module({
  imports: [BoardModule, CommentModule,DatabaseModule,UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
