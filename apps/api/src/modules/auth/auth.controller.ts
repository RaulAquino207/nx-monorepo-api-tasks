import { Body, Controller, Post, SetMetadata, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Public } from '../../decorators/public.decorator';
import { User } from '../../decorators/user.decorator';
import { RefreshTokenGuard } from '../../guards/refresh-token.guard';
import { JwtPayloadWithRefreshToken } from '../../types/jwt-payload-with-refresh-token.type';
import { JwtPayload } from '../../types/jwt-payload.type';
import { AuthService } from './auth.service';
import { SigninDto } from './dto/signin.dto';
import { SignupDto } from './dto/singup.dto';
import { Refresh } from '../../decorators/refresh.decorator';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @Post('local/signup')
  singupLocal(@Body() signupDto: SignupDto) {
    return this.authService.singupLocal(signupDto);
  }

  @Public()
  @Post('local/signin')
  signinLocal(@Body() signinDto: SigninDto) {
    return this.authService.signinLocal(signinDto);
  }

  @Post('logout')
  logout(@User() jwtPayload: JwtPayload) {
    return this.authService.logout(jwtPayload);
  }

  @Refresh()
  @UseGuards(RefreshTokenGuard)
  @Post('refresh')
  refresh(@User() jwtPayloadWithRefreshToken: JwtPayloadWithRefreshToken) {
    return this.authService.refresh(jwtPayloadWithRefreshToken);
  }
}
