import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Health')
@Controller('/health')
export class AppController {

  @Get('/status')
  getStatus() {
    return { message: 'success' };
  }
}
