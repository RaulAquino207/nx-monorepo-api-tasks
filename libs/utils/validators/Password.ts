import { HttpException, HttpStatus } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { HashUtils } from '../HashUtils';

export class Password {
  private readonly password: string;

  get value(): string {
    return this.password;
  }

  private validatePassword(password: string): boolean {
    const regex = /^(?=.*[A-Z])(?=.*[0-9])(?=.{8,})(?!.*\s).*$/;
    return regex.test(password);
  }

  constructor(password: string) {
    if (!this.validatePassword(password)) {
      throw new HttpException(`Senha inválida`, HttpStatus.BAD_REQUEST);
    }

    this.password = HashUtils.hashData(password);
  }
}
