import { Injectable } from "@nestjs/common";
import { UpdateUserDto } from "apps/api/src/modules/user/dto/update-user.dto";
import { UserRepository } from "apps/api/src/modules/user/user.repository";
import { Schema, connection } from "mongoose";

@Injectable()
export class MongoUserRepository implements UserRepository {

    private readonly userRepository: any;
    constructor(
        name: string,
        schema: Schema,
    ) {
        this.userRepository = connection.model(name, schema);
    }
    
    findById(id: string): Promise<any> {
        throw new Error("Method not implemented.");
    }

    update(id: string, updateUserDto: UpdateUserDto): Promise<any> {
        throw new Error("Method not implemented.");
    }

    async create(): Promise<any> {
        const user = new this.userRepository({
            firstName: 'Raul',
        })

        await user.save();
        console.log("🚀 ~ MongoUserRepository ~ create ~ user:", user)
    }

}