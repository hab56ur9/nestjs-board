import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';


export const commentProvider = [
    {
        provider: 'COMMENT_REPOSITORY',
        useFactory: (dataSource:DataSource) => dataSource.getRepository(Comment),
        inject:["DATA_SOURCE"],
    }
];