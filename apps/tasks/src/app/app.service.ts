import { Injectable, OnModuleInit } from '@nestjs/common';

@Injectable()
export class AppService implements OnModuleInit {

  onModuleInit() {
    console.log('Hello from the Tasks!');
  }
  
}
