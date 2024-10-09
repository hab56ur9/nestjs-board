import { Controller, Get, Post, Body, Patch, Param, Delete, Put, Query, UseGuards } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('api/v1/comment')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}
  
  // 댓글 쓰기
  @UseGuards(AuthGuard)
  @Post()
  create(@Query('id') board_id:number,@Query('userId') user_id, @Body() createCommentDto: CreateCommentDto) {
    return this.commentService.create(+board_id,+user_id,createCommentDto);
  }
  // 댓글 모두 가져오기
  @Get()
  findAll(@Query('id') board_id: number) {
    console.log("testing")
    return this.commentService.findAll(+board_id);
  }
  
  @UseGuards(AuthGuard)
  @Put(':id')
  update(@Param('id') comment_id: number,@Body() updateCommentDto: UpdateCommentDto) {
    return this.commentService.update(+comment_id, updateCommentDto);
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  deleteOne(@Param('id') comment_id: number) {
    return this.commentService.deleteOne(+comment_id);
  }
}
