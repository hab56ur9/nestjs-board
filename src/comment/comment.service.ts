import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { Comment } from './entities/comment.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CommentService {
  constructor(
    @Inject('COMMENT_REPOSITORY')
    private commentRepo:Repository<Comment>
  ){}

  async create(board_id:number,user_id:number,createCommentDto: CreateCommentDto):Promise<void>{
    await this.commentRepo.insert({
      boardId:board_id,
      userId:user_id,
      content:createCommentDto.content
    });
  }

  async findAll(board_id:number):Promise<Comment[]>{
    return await this.commentRepo.find({
      where:{
        boardId:board_id
      }
    });
  
  }
  async findOne(comment_id:number):Promise<Comment>{
    const comment = await this.commentRepo.findOne({where:{id:comment_id}});
    if(!comment){
      throw new NotFoundException(`Comment with ID:${comment_id} not found.`);
    }
    return comment;
  }

  async update(comment_id: number, updateCommentDto: UpdateCommentDto): Promise<void> {
    this.findOne(comment_id);
    await this.commentRepo.update(comment_id, updateCommentDto);
  }

  async deleteOne(comment_id: number): Promise<void> {
    this.findOne(comment_id);
    await this.commentRepo.delete(comment_id);
  }
}
