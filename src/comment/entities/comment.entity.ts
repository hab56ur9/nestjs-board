import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Comment {
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    userId:number;
    @Column()
    boardId:number;
    @Column()
    content:string;
}
