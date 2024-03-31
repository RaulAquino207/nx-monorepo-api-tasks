import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Public } from '../decorators/public.decorator';

@ApiTags('Health')
@Controller('/health')
export class AppController {

  @Public()
  @Get('/status')
  getStatus() {
    return { message: 'success' };
  }
}
