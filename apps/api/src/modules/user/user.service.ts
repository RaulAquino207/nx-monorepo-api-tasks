import { Inject, Injectable } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {

  constructor(
    @Inject('POSTGRES_USER_REPOSITORY')
    private readonly postgresUserRepository: UserRepository,
    // @Inject('MONGO_USER_REPOSITORY')
    // private readonly mongoUserRepository: UserRepository,
  ) { }

  findOne(id: string) {
    return `This action returns a #${id} user`;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const user = await this.postgresUserRepository.update(id, updateUserDto);
    return user;
  }

  remove(id: string) {
    return this.postgresUserRepository.delete(id);
  }
}
