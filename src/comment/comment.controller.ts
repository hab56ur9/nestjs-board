import { Controller, Get, Post, Body, Patch, Param, Delete, Put, Query } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';

@Controller('api/v1/comment')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}
  
  // 댓글 쓰기
  @Post()
  create(@Query('id') board_id:number,@Query('userId') user_id, @Body() createCommentDto: CreateCommentDto) {
    return this.commentService.create(+board_id,+user_id,createCommentDto);
  }
  // 댓글 모두 가져오기
  @Get()
  getAll(@Query('id') board_id: number) {
    console.log("testing")
    return this.commentService.getAll(+board_id);
  }

  @Put(':id')
  update(@Param('id') comment_id: number,@Body() updateCommentDto: UpdateCommentDto) {
    return this.commentService.update(+comment_id, updateCommentDto);
  }

  @Delete(':id')
  deleteOne(@Param('id') comment_id: number) {
    return this.commentService.deleteOne(+comment_id);
  }
}
