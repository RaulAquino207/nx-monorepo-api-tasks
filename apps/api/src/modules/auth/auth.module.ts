import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { DatabaseModule } from '@nx-monorepo-api-tasks/database';
import { postgresUserProviders } from 'libs/database/src/lib/postgres/providers/user';
import { AccessTokenStrategy } from '../../strategies/access-token.strategy';
import { RefreshTokenStrategy } from '../../strategies/refresh-token.strategy';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  imports: [DatabaseModule, JwtModule.register({})],
  controllers: [AuthController],
  providers: [
    AuthService,
    AccessTokenStrategy,
    RefreshTokenStrategy,
    ...postgresUserProviders,
  ],
})
export class AuthModule {}
