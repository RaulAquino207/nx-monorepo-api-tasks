import { Module } from '@nestjs/common';

import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from 'libs/database/src';
import * as path from 'path';
import { DataSource } from 'typeorm';
import { User } from '../../../../libs/database/src/lib/postgres/models/user.entity';
import { AppController } from './app.controller';
import { AppService } from './app.service';
@Module({
  imports: [
    ConfigModule.forRoot({
      ignoreEnvFile: process.env.NODE_ENV != 'development',
      envFilePath: path.resolve(__dirname, '../../../dev.env'),
    }),
    DatabaseModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: 'USER_REPOSITORY',
      useFactory: (dataSource: DataSource) => dataSource.getRepository(User),
      inject: ['DATA_SOURCE'],
    },
  ],
})
export class AppModule {}
