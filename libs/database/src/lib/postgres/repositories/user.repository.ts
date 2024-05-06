import { Injectable } from "@nestjs/common";
import { UpdateUserDto } from "apps/api/src/modules/user/dto/update-user.dto";
import { UserRepository } from "../../../../../../apps/api/src/modules/user/user.repository";
import { User } from "../models/user.entity";
import { DataSource, FindOneOptions, Repository } from "typeorm";

@Injectable()
export class PostgresUserRepository implements UserRepository {
    private readonly userRepository: Repository<User>;
    constructor(private readonly dataSource: DataSource) {
        this.userRepository = this.dataSource.getRepository(User);
    }

    async findOne(options: FindOneOptions<User>): Promise<User> {
        return await this.userRepository.findOne(options) as User;
    }
    
    async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
        const user = await this.userRepository.update('b1ab3660-cf59-484a-b3db-231f8fd7155b', {
            firstName:  'Raul',
            lastName: 'Aquino',
        })

        return user as unknown as User;
    }
}