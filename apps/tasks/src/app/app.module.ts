import { Module } from '@nestjs/common';

import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import * as path from "path";

@Module({
  imports: [ConfigModule.forRoot({
    ignoreEnvFile: process.env.NODE_ENV != 'development',
    envFilePath: path.resolve(__dirname, '../../../dev.env'),
  })],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
