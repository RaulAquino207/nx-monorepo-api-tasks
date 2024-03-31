import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { ApiSecurity, ApiTags } from '@nestjs/swagger';
import { Public } from '../../decorators/public.decorator';
import { RefreshTokenGuard } from '../../guards/refresh-token.guard';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @ApiSecurity('none')
  @Post('local/signup')
  singupLocal(@Body() authDto: AuthDto) {
    return this.authService.singupLocal(authDto);
  }

  @Post('local/signin')
  signinLocal(@Body() authDto: AuthDto) {
    return this.authService.signinLocal(authDto);
  }

  @Post('logout')
  logout() {
    return this.authService.logout();
  }

  @Public()
  @UseGuards(RefreshTokenGuard)
  @Post('refresh')
  refresh() {
    return this.authService.refresh();
  }
}
