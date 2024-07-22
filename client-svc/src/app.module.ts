import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { HELLO_PACKAGE_NAME } from './proto/hello';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: HELLO_PACKAGE_NAME,
        transport: Transport.GRPC,
        options: {
          url: '0.0.0.0:50051',
          package: HELLO_PACKAGE_NAME,
          protoPath: join(__dirname, './proto/hello.proto'),
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
