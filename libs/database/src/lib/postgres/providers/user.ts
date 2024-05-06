import { DataSource } from 'typeorm';
import { PostgresUserRepository } from '../repositories/user.repository';

export const userProviders = [
  {
    provide: 'USER_REPOSITORY',
    useFactory: (dataSource: DataSource) => {
      const repository = new PostgresUserRepository(dataSource);
      return repository;
    },
    inject: ['POSTGRES_DATASOURCE'],
  },
];
