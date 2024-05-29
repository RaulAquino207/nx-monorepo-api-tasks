import { DataSource } from 'typeorm';
import { PostgresUserRepository } from '../repositories/user.repository';

export const postgresUserProviders = [
  /*
    Here is the traditional way of using the client's own repository.
    {
      provide: 'POSTGRES_USER_REPOSITORY',
      useFactory: (dataSource: DataSource) => dataSource.getRepository(User),
      inject: ['POSTGRES_DATASOURCE'],
    },
  */
  {
    provide: 'POSTGRES_USER_REPOSITORY',
    useFactory: (dataSource: DataSource) => {
      const repository = new PostgresUserRepository(dataSource);
      return repository;
    },
    inject: ['POSTGRES_DATASOURCE'],
  },
];
