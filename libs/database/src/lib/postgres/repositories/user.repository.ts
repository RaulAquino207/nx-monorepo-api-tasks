import { User } from "../models/user.entity";

export abstract class UserRepository {
  abstract create(data: Partial<User>): Promise<User>;
  abstract update(id: string, data: Partial<User>): Promise<User>;
}
