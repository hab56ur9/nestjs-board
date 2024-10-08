import { Entity } from "typeorm";

@Entity()
export class Board {
    id: number;
    title:string;
    content:string;
    commentId:number;
}
