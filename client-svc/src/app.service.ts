import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import {
  HELLO_PACKAGE_NAME,
  HELLO_SERVICE_NAME,
  HelloServiceClient,
} from './proto/hello';
import { ClientGrpc } from '@nestjs/microservices';
import { Metadata } from '@grpc/grpc-js';

@Injectable()
export class AppService implements OnModuleInit {
  private helloService: HelloServiceClient;

  constructor(@Inject(HELLO_PACKAGE_NAME) private client: ClientGrpc) {}

  onModuleInit() {
    this.helloService =
      this.client.getService<HelloServiceClient>(HELLO_SERVICE_NAME);
  }

  getHello() {
    const metadata = new Metadata();
    metadata.add('x-api-key', 'lamiachiaveapi');
    return this.helloService.sayHello({}, metadata);
  }
}
