import mongoose from 'mongoose';
import { DataSource } from 'typeorm';
import { User } from './postgres/models/user.entity';

export const databaseProviders = [
  {
    provide: 'POSTGRES_DATASOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'postgres',
        database: 'postgres',
        entities: [
          User
        ],
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
  {
    provide: 'MONGO_DATASOURCE',
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect('mongodb://root:root@localhost:27017/mongo?authSource=admin&readPreference=primary&directConnection=true&ssl=false'),
  },
];
