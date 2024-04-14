import { Module } from '@nestjs/common';

import { ConfigModule } from '@nestjs/config';
import * as path from 'path';
import { AccessTokenGuard } from '../guards/access-token.guard';
import { AuthModule } from '../modules/auth/auth.module';
import { AppController } from './app.controller';
import { HttpExceptionFilter } from '../filters/http-exception.filter';
import { ClsModule } from 'nestjs-cls';
import { HttpContextInterceptor } from '../interceptors/http-context.interceptor';
@Module({
  imports: [
    ConfigModule.forRoot({
      ignoreEnvFile: process.env.NODE_ENV != 'development',
      envFilePath: path.resolve(__dirname, '../../../dev.env'),
      isGlobal: true,
    }),
    ClsModule.forRoot({
      global: true,
      middleware: { mount: true },
    }),
    AuthModule,
  ],
  controllers: [AppController],
  providers: [
    {
      provide: 'APP_GUARD',
      useClass: AccessTokenGuard,
    },
    {
      provide: 'APP_FILTER',
      useClass: HttpExceptionFilter,
    },
    {
      provide: 'APP_INTERCEPTOR',
      useClass: HttpContextInterceptor,
    }
  ],
})
export class AppModule {}
