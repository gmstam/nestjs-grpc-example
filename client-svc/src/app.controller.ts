import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { GrpcToHttpInterceptor } from 'nestjs-grpc-exceptions';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @UseInterceptors(GrpcToHttpInterceptor)
  getHello() {
    return this.appService.getHello();
  }
}
