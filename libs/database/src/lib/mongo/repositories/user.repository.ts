import { Injectable } from "@nestjs/common";
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

    async create(): Promise<any> {
        const user = new this.userRepository({
            firstName: 'Raul',
        })

        await user.save();
        console.log("🚀 ~ MongoUserRepository ~ create ~ user:", user)
    }

}