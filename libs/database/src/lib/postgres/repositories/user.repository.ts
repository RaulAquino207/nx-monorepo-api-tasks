import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { UserRepository } from "../../../../../../apps/api/src/modules/user/user.repository";
import { User } from "../models/user.entity";

@Injectable()
export class PostgresUserRepository implements UserRepository {
    private readonly userRepository: Repository<User>;
    constructor(private readonly dataSource: DataSource) {
        this.userRepository = this.dataSource.getRepository(User);
    }
    async create(): Promise<any> {
        const user = await this.userRepository.save({
            firstName: 'Raul',
            lastName: 'Aquino',
            email: 'aquinoraul207@gmail.com',
            password: '123456',
        });
        console.log("🚀 ~ PostgresUserRepository ~ create ~ user:", user)
    }
}