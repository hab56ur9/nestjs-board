import {IsString,IsNumber, IsOptional} from 'class-validator';
export class CreateBoardDto {
    @IsString()
    title:string;
    @IsString()
    content:string;
}
