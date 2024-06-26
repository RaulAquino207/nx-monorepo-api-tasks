import { Replace } from '../../../../../libs/helpers/Replace';

export interface IUser {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    password?: string;
}

export class UserEntity {
    private userProps: IUser;

    constructor(
        userProps: Replace<IUser, { id?: string }>
    ) {
        this.userProps = {
            ...userProps,
            id: null,
        }
    }

    get id(): string {
        return this.userProps.id;
    }

    set id(value: string) {
        this.userProps.id = value;
    }

    get firstName(): string {
        return this.userProps.firstName;
    }

    set firstName(value: string) {
        this.userProps.firstName = value;
    }

    get lastName(): string {
        return this.userProps.lastName;
    }

    set lastName(value: string) {
        this.userProps.lastName = value;
    }

    get email(): string {
        return this.userProps.email;
    }

    set email(value: string) {
        this.userProps.email = value;
    }

    get password(): string {
        return this.userProps.password;
    }

    set password(value: string) {
        this.userProps.password = value;
    }
}
