import { ForbiddenException, Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { User } from 'libs/database/src/lib/postgres/models/user.entity';
import { Repository } from 'typeorm';
import { AuthDto } from './dto/auth.dto';

@Injectable()
export class AuthService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>,
    private jwtService: JwtService
  ) {}

  async singupLocal(authDto: AuthDto) {
    const { email, password } = authDto;
    const hashedPassword = await this.hashData(password);
    const user = await this.userRepository.save({
      email: email,
      password: hashedPassword,
      firstName: 'Raul',
      lastName: 'Aquino',
    });

    const tokens = await this.getTokens(user.id, user.email);
    await this.updateRefreshTokenHash(user.id, tokens.refresh_token);
    return tokens;
  }

  async signinLocal(authDto: AuthDto) {
    const { email, password } = authDto;
    const user = await this.userRepository.findOne({
      where: {
        email: email,
      },
    });

    if (!user) {
      throw new ForbiddenException('Access denied');
    }

    const passwordMatches = await bcrypt.compare(password, user.password);
    if (!passwordMatches) throw new ForbiddenException('Access denied');

    const tokens = await this.getTokens(user.id, user.email);
    await this.updateRefreshTokenHash(user.id, tokens.refresh_token);
    return tokens;
  }

  async logout() {
    // await this.userRepository.update(
    //   {
    //     id: 'ae412992-8ea9-4d20-86df-bb6158f48b63',
    //     hashedRefreshToken: Not('NULL'),
    //   },
    //   {
    //     hashedRefreshToken: null,
    //   }
    // );
    // return true;

    return 'ok';
  }

  async refresh() {
    const user = await this.userRepository.findOne({
      where: {
        id: 'ae412992-8ea9-4d20-86df-bb6158f48b63',
      },
    });
    if (!user || !user.hashedRefreshToken)
      throw new ForbiddenException('Access Denied');

    const rtMatches = await bcrypt.compare(
      user.hashedRefreshToken,
      '$2b$10$fzpj45s5zWoR2ArFb8Ijreu68R3OWAQAXXntmlMrwCjZ8a1GcQSXW'
    );
    if (!rtMatches) throw new ForbiddenException('Access Denied');

    const tokens = await this.getTokens(user.id, user.email);
    await this.updateRefreshTokenHash(user.id, tokens.refresh_token);

    return tokens;
  }

  hashData(data: string) {
    return bcrypt.hash(data, 10);
  }

  async updateRefreshTokenHash(userId: string, rt: string) {
    const hash = await this.hashData(rt);
    await this.userRepository.update(userId, {
      hashedRefreshToken: hash,
    });
  }

  async getTokens(userId: string, email: string) {
    const [at, rt] = await Promise.all([
      this.jwtService.signAsync(
        {
          sub: userId,
          email,
        },
        {
          secret: 'at-secret',
          expiresIn: 60 * 15,
        }
      ),
      this.jwtService.signAsync(
        {
          sub: userId,
          email,
        },
        {
          secret: 'rt-secret',
          expiresIn: 60 * 60 * 24 * 7,
        }
      ),
    ]);

    return {
      access_token: at,
      refresh_token: rt,
    };
  }
}
