import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { AuthService } from './auth/auth.service';
import {
  HELLO_PACKAGE_NAME,
  HELLO_SERVICE_NAME,
  HelloServiceClient,
} from './proto/hello';

@Injectable()
export class AppService implements OnModuleInit {
  private helloService: HelloServiceClient;

  constructor(
    @Inject(HELLO_PACKAGE_NAME) private client: ClientGrpc,
    private authService: AuthService,
  ) {}

  onModuleInit() {
    this.helloService =
      this.client.getService<HelloServiceClient>(HELLO_SERVICE_NAME);
  }

  getHello() {
    return this.helloService.sayHello(
      {},
      this.authService.appendAuthMetadata(),
    );
  }
}
