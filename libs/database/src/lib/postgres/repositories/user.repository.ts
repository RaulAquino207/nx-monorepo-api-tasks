import { Injectable } from "@nestjs/common";
import { SignupDto } from "apps/api/src/modules/auth/dto/singup.dto";
import { UpdateUserDto } from "apps/api/src/modules/user/dto/update-user.dto";
import { DataSource, Repository } from "typeorm";
import { UserRepository } from "../../../../../../apps/api/src/modules/user/user.repository";
import { PostgresUserMapper } from "../mappers/user.mapper";
import { User } from "../models/user.entity";

@Injectable()
export class PostgresUserRepository implements UserRepository {
    private readonly userRepository: Repository<User>;
    constructor(private readonly dataSource: DataSource) {
        this.userRepository = this.dataSource.getRepository(User);
    }

    async create(signupDto: SignupDto) {
        const toDomainUser = PostgresUserMapper.toDomain(signupDto);
        const toCreateUser = PostgresUserMapper.toCreate(toDomainUser);
        const user = await this.userRepository.save(toCreateUser);
        return PostgresUserMapper.toResponse(user);
    }

    async update(id: string, updateUserDto: UpdateUserDto): Promise<any> {
        const toUpdateUser = PostgresUserMapper.toUpdate(updateUserDto);
        const user = (await this.userRepository.update(id, toUpdateUser)).raw[0];
        return PostgresUserMapper.toResponse(user);
    }

    async delete(id: string): Promise<any> {
        const user = await this.userRepository.delete(id);
        console.log("🚀 ~ file: user.repository.ts:33 ~ PostgresUserRepository ~ delete ~ user:", user)
    }

    async updateRefreshTokenHash(id: string, rt: string): Promise<void> {
        throw new Error("Method not implemented.");
    }

    async findById(id: string): Promise<any> {
        return this.userRepository.findOne({
            where: {
                id
            }
        });
    }

    findByEmail(email: string): Promise<any> {
        return this.userRepository.findOne({
            where: {
                email
            }
        });
    }
}