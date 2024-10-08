import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { Comment } from './entities/comment.entity';
@Injectable()
export class CommentService {
  private comments:Comment[] = [
    {
      id:1,
      userId:1,
      boardId:1,
      content:"comment 1-1",
    },
    {
      id:2,
      userId:1,
      boardId:1,
      content:"comment 1-2",
    },
    {
      id:3,
      userId:1,
      boardId:1,
      content:"comment 1-3",
    },
    {
      id:4,
      userId:1,
      boardId:2,
      content:"comment 2-1",
    },
    {
      id:5,
      userId:1,
      boardId:2,
      content:"comment 2-2",
    }
  ]
  create(board_id:number,user_id:number,createCommentDto: CreateCommentDto) {
    this.comments.push({
      id:this.comments.length+1,
      userId:user_id,
      boardId:this.comments.length+1,
      ...createCommentDto,
      })

  }

  getAll(board_id:number):Comment[] {
    const comments = this.comments.filter(comments=>comments.boardId === board_id);

    return comments;
  }
  getOne(comment_id:number){
    const comment:Comment = this.comments.find(comment=>comment.id === comment_id);
    if(!comment)
      throw new NotFoundException();
    return comment;
  }

  update(comment_id: number, updateCommentDto: UpdateCommentDto) {
    // error 검증용
    const comment:Comment = this.getOne(comment_id);
    this.deleteOne(comment_id);
    this.comments.push({
      id:comment_id,
      userId:comment.userId,
      boardId:comment.boardId,
      content:updateCommentDto.content,
      })
  }

  deleteOne(comment_id: number) {
    this.getOne(comment_id);
  }
}
