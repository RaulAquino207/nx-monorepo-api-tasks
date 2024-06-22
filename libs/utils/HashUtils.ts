import * as bcrypt from 'bcrypt';

export class HashUtils {
    static hashData(data: string): string {
        return bcrypt.hashSync(data, 10);
    }
    static compareData(data: string, hash: string): boolean {
        return bcrypt.compareSync(data, hash);
    }
}