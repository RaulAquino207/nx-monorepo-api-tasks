import { Module } from '@nestjs/common';

import { ConfigModule } from '@nestjs/config';
import * as path from 'path';
import { AppController } from './app.controller';
@Module({
  imports: [
    ConfigModule.forRoot({
      ignoreEnvFile: process.env.NODE_ENV != 'development',
      envFilePath: path.resolve(__dirname, '../../../dev.env'),
    }),
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
