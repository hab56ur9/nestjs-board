import { Entity,Column,PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Board {
    @PrimaryGeneratedColumn('uuid')
    uuid:number;
    @Column()
    title:string;
    @Column()
    content:string;
  
}
