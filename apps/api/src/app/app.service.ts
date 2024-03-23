import { Inject, Injectable } from '@nestjs/common';
import { User } from 'libs/database/src/lib/postgres/models/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AppService {
  constructor(
    @Inject('USER_REPOSITORY')
    private usersRepository: Repository<User>,
  ) {}
  async getData() {
    const users = await this.usersRepository.find()
    console.log("🚀 ~ AppService ~ getData ~ users:", users)
    
    return ({ message: 'Hello API' });
  }
}
