import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from "typeorm";

@Entity()
export class Comment {
    @PrimaryGeneratedColumn('uuid')
    uuid:number;
    @Column()
    userId:number;
    @Column()
    boardId:number;
    @Column()
    content:string;
    @CreateDateColumn()
    date:Date;
}
