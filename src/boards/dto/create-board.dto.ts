import {IsString,IsNumber, IsOptional} from 'class-validator';

export class CreateBoardDto {
    @IsString()
    id:number;
    @IsString()
    title:string;
    @IsString()
    content:string;
    @IsNumber()
    commentId:number;
}
