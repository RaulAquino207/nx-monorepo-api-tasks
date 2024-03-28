import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { DatabaseModule } from '@nx-monorepo-api-tasks/database';
import { userProviders } from '../../../../../libs/database/src/lib/postgres/providers/user';

@Module({
  imports: [
    DatabaseModule
  ],
  controllers: [AuthController],
  providers: [
    ...userProviders,
    AuthService
  ],
})
export class AuthModule {}
