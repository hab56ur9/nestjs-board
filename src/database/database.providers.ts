import { DataSource } from 'typeorm';
import { Board } from 'src/board/entities/board.entity';
import { Comment } from 'src/comment/entities/comment.entity';
import { User } from 'src/users/entities/user.entity';


export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'postgres',
        database: 'postgres',
        entities: [
            Board,Comment,User
        ],
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
]