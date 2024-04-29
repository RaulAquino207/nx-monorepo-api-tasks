import { User } from "libs/database/src/lib/postgres/models/user.entity";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";

export abstract class UserRepository {
  abstract create(createUserDto: CreateUserDto): Promise<User>;
  abstract update(updateUserDto: UpdateUserDto): Promise<User>;
}