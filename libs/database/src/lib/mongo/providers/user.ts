import { Connection } from "mongoose";
import { MongoUserRepository } from "../repositories/user.repository";
import { UserSchema } from "../models/user.schema";



export const mongoUserProviders = [
    {
        provide: 'MONGO_USER_REPOSITORY',
        useFactory: (connection: Connection) => {
            const repository = new MongoUserRepository('User', UserSchema);
            return repository;
        },
        inject: ['MONGO_DATASOURCE'],
      },
];
