import { Controller, Get, Post, Body, Patch, Param, Delete, Put, Query } from '@nestjs/common';
import { BoardService } from './board.service';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';


@Controller('api/v1/board')
export class BoardController {
  
  constructor(private readonly boardService: BoardService) {}
  
  // 모든 게시글 조회
  @Get()
  async getAll( @Query('page') page:number=1, 
          @Query('size') size:number=10)
  { 
    return await this.boardService.getBoards(+page,+size);
  }
  // 게시판 생성
  @Post()
  create(@Body() createBoardDto: CreateBoardDto) {
    return this.boardService.create(createBoardDto);
  }

  //게시글 내용 가져오기
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.boardService.findOne(+id);
  }

  //게시글 내용 가져오기
  @Put(':id')
  update(@Param('id') id: string, @Body() updateBoardDto: UpdateBoardDto) {
    this.boardService.update(+id, updateBoardDto);
    return;
  }

  // 게시글 삭제
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.boardService.remove(+id);
  }
}
