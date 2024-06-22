import { Module } from '@nestjs/common';
import { DatabaseModule } from '@nx-monorepo-api-tasks/database';
import { mongoUserProviders } from 'libs/database/src/lib/mongo/providers/user';
import { postgresUserProviders } from 'libs/database/src/lib/postgres/providers/user';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [
    DatabaseModule,
  ],
  controllers: [UserController],
  providers: [
    UserService,
    ...postgresUserProviders,
    ...mongoUserProviders,
  ],
})
export class UserModule { }
