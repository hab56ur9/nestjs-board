import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';

export const usersProviders = [
    {
        provide: 'USERS_REPOSITORY',
        useFactory: (dataSource) => dataSource.getRepository(User),
        inject: ['DATA_SOURCE'],
    },
];