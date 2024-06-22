import { SignupDto } from "../auth/dto/singup.dto";
import { UpdateUserDto } from "./dto/update-user.dto";

export abstract class UserRepository {
  abstract create(signupDto: SignupDto): Promise<any>;
  abstract update(id: string, updateUserDto: UpdateUserDto): Promise<any>;
  abstract delete(id: string): Promise<any>;
  abstract updateRefreshTokenHash(id: string, rt: string): Promise<void>;
  abstract findById(id: string): Promise<any>;
  abstract findByEmail(email: string): Promise<any>;
}