import { Module } from '@nestjs/common';
import { DatabaseModule } from '@nx-monorepo-api-tasks/database';
import { userProviders } from 'libs/database/src/lib/postgres/providers/user';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [
    DatabaseModule,
  ],
  controllers: [UserController],
  providers: [
    UserService,
    ...userProviders,
  ],
})
export class UserModule { }
