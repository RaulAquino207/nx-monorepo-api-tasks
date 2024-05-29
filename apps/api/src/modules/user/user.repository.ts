import { UpdateUserDto } from "./dto/update-user.dto";

export abstract class UserRepository {
  abstract update(id: string, updateUserDto: UpdateUserDto): Promise<any>;
  abstract findById(id: string): Promise<any>;
}