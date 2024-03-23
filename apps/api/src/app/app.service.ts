import { Inject, Injectable } from '@nestjs/common';
import { User } from 'libs/database/src/lib/postgres/models/user.entity';
import { Model } from 'mongoose';
import { Repository } from 'typeorm';

@Injectable()
export class AppService {
  async getData() {
    return { message: 'Hello API' };
  }
}
