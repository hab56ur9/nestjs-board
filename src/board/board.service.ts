import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';
import { Board } from './entities/board.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BoardService {
  constructor(
    @Inject('BOARD_REPOSITORY') 
    private boardRepo:Repository<Board>
  ){}

  async getBoards(page: number, pageSize: number): Promise<Board[]> {
     // 페이지네이션 없이 모든 데이터 가져오기
     return await this.boardRepo.find();
  }

  // this works
  async create(createBoardDto: CreateBoardDto): Promise<void> {
    await this.boardRepo.insert({
      ...createBoardDto
    });
  }

  async findOne(id: number): Promise<Board> {    
    const board = await this.boardRepo.findOne({ where: { id } });
    if (!board) {
      throw new NotFoundException(`Movie with ID:${id} not found.`);
    }
    return board;
  }

  async update(id: number, updateBoardDto: UpdateBoardDto): Promise<void> {
    this.findOne(id);
    await this.boardRepo.update(id, updateBoardDto);
  }

  async remove(id: number): Promise<void> {
    this.findOne(id);
    await this.boardRepo.delete(id);
  }
}
