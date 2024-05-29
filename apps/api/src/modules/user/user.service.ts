import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from 'libs/database/src/lib/postgres/models/user.entity';
import { Repository } from 'typeorm';
import { PostgresUserRepository } from 'libs/database/src/lib/postgres/repositories/user.repository';
import { UserRepository } from './user.repository';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {

  constructor(
    @Inject('POSTGRES_USER_REPOSITORY')
    private readonly postgresUserRepository: UserRepository,
    // @Inject('MONGO_USER_REPOSITORY')
    // private readonly mongoUserRepository: UserRepository,
  ) { }
  async create(createUserDto: CreateUserDto) {
    // await this.postgresUserRepository.create();
    // await this.mongoUserRepository.create();
    return 'This action adds a new user';
  }

  findOne(id: string) {
    return `This action returns a #${id} user`;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    this.postgresUserRepository.update(id, updateUserDto);
    return `This action returns a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
