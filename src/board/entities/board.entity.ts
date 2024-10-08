import { Entity,Column,PrimaryGeneratedColumn, PrimaryColumn } from "typeorm";
@Entity()
export class Board {
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    title:string;
    @Column()
    content:string;
    @Column()
    commentId:number;
}
