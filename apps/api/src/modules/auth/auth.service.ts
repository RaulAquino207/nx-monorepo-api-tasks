import { Inject, Injectable } from '@nestjs/common';
import { User } from 'libs/database/src/lib/postgres/models/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>
  ) {}

  async singupLocal() {
    const user = await this.userRepository.save({
      email: 'aquinoraul207@gmail.com',
      password: await bcrypt.hash('123456', 10),
      firstName: 'Raul',
      lastName: 'Aquino',
    })
    console.log("🚀 ~ AuthService ~ singupLocal ~ user:", user)
  }
  signinLocal() {}
  logout() {}
  refresh() {}
}
