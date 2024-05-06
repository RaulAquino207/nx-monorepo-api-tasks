import { User } from "libs/database/src/lib/postgres/models/user.entity";
import { UpdateUserDto } from "./dto/update-user.dto";
import { FindOneOptions } from "typeorm";

export abstract class UserRepository {
  abstract update(id: string, updateUserDto: UpdateUserDto): Promise<User>;
  abstract findOne(options: FindOneOptions<User>): Promise<User>;
}