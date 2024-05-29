import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { UserRepository } from "../../../../../../apps/api/src/modules/user/user.repository";
import { User } from "../models/user.entity";
import { UpdateUserDto } from "apps/api/src/modules/user/dto/update-user.dto";
import { PostgresUserMapper } from "../mappers/user.mapper";

@Injectable()
export class PostgresUserRepository implements UserRepository {
    private readonly userRepository: Repository<User>;
    constructor(private readonly dataSource: DataSource) {
        this.userRepository = this.dataSource.getRepository(User);
    }

    findById(id: string): Promise<any> {
        throw new Error("Method not implemented.");
    }

    async update(id: string, updateUserDto: UpdateUserDto): Promise<any> {
        const toUpdateUser = PostgresUserMapper.toUpdate(updateUserDto);
        const user = await this.userRepository.update(id, toUpdateUser);
        return user;
    }

    async create(user: User) {
        
    }

    // async create(): Promise<any> {
    //     const user = await this.userRepository.save({
    //         firstName: 'Raul',
    //         lastName: 'Aquino',
    //         email: 'aquinoraul207@gmail.com',
    //         password: '123456',
    //     });
    //     console.log("🚀 ~ PostgresUserRepository ~ create ~ user:", user)
    // }


}