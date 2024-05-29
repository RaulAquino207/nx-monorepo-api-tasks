import { UpdateUserDto } from "apps/api/src/modules/user/dto/update-user.dto";
import { User } from "../models/user.entity";
import { SignupDto } from "../../../../../../apps/api/src/modules/auth/dto/singup.dto";
import { UserEntity } from "../../../../../../apps/api/src/modules/user/user.entity";

export class PostgresUserMapper {

    static toDomain(signupDto: SignupDto): UserEntity { 
        return new UserEntity({
            firstName: signupDto.first_name,
            lastName: signupDto.last_name,
            email: signupDto.email
        });
    }

    static toUpdate(updateUserDto: UpdateUserDto): Partial<User> {
        return {
            firstName: updateUserDto.first_name,
            lastName: updateUserDto.last_name,
            email: updateUserDto.email
        }
    }

    static toCreate(userEntity: UserEntity): Partial<User> {
        return {
            firstName: userEntity.firstName,
            lastName: userEntity.lastName,
            email: userEntity.email,
            password: '123456'
        }
    }

    static toResponse(user: User) {
        return {
            id: user.id,
            first_name: user.firstName,
            last_name: user.lastName,
            email: user.email
        }
    }
}