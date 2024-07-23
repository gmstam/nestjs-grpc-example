import { Controller, UseGuards, UseInterceptors } from '@nestjs/common';
import {
  Empty,
  HelloResponse,
  HelloServiceController,
  HelloServiceControllerMethods,
} from './proto/hello';
import { Observable } from 'rxjs';
import { Metadata } from '@grpc/grpc-js';
import { ApiKeyGuard } from './auth/auth.guard';
import { GrpcToHttpInterceptor } from 'nestjs-grpc-exceptions';

@Controller()
@HelloServiceControllerMethods()
export class HelloController implements HelloServiceController {
  @UseInterceptors(GrpcToHttpInterceptor)
  @UseGuards(ApiKeyGuard)
  sayHello(
    request: Empty,
    metadata?: Metadata,
  ): Promise<HelloResponse> | Observable<HelloResponse> | HelloResponse {
    return { message: 'ciao' };
  }
}
