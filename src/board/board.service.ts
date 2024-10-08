import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';
import { Board } from './entities/board.entity';
@Injectable()
export class BoardService {
  private board:Board[] = [
    {
      id:1,
      title:"test title1",
      content:"test content test content test content test content",
      commentId:1
    },
    {
      id:2,
      title:"test title2",
      content:"test content test content test content test content",
      commentId:2
    },
    {
      id:3,
      title:"test title3",
      content:"test content test content test content test content",
      commentId:3
    },
  ];

  getAll(page:number,size:number){
    //TODO page,size별로 잘라서 주기
    return this.board;
  }

  create(createBoardDto: CreateBoardDto) {
    this.board.push({
      id:this.board.length+1,
      ...createBoardDto,
      commentId:this.board.length+1
    })
  }

  findOne(id: number) {
    //TODO DB연결 로직으로 변경
    const board = this.board.find(board=>board.id == id)
    if(!board){
      throw new NotFoundException(`Movie with ID:${id} not found.`);
    }
    return board;
  }

  update(id: number, updateBoardDto: UpdateBoardDto) {
    const board = this.findOne(id);
    this.remove(id);
    this.board.push({...board,...updateBoardDto});
  }

  remove(id: number) {
    // DB 로직으로 변경
    // 이거 바뀌어야할수도

    // 이거 실패하면 없다는 뜻으로 not found exception검증용임
    this.findOne(id);
    this.board = this.board.filter(movie=>movie.id !== +id);
  }
}
