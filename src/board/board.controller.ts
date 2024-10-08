import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { BoardService } from './board.service';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';

@Controller('board')
export class BoardController {
  constructor(private readonly boardService: BoardService) {}

  // 게시판 생성
  @Post()
  create(@Body() createBoardDto: CreateBoardDto) {
    return `create a new board ${createBoardDto}`
  }

  //게시글 내용 가져오기
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.boardService.findOne(+id);
  }

  //게시글 내용 가져오기
  @Put(':id')
  update(@Param('id') id: string, @Body() updateBoardDto: UpdateBoardDto) {
    return this.boardService.update(+id, updateBoardDto);
  }

  // 게시글 삭제
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.boardService.remove(+id);
  }
}
