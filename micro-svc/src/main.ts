import * as fs from 'fs/promises';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';
import { join } from 'path';
import { ReflectionService } from '@grpc/reflection';
import { ServerCredentials } from '@grpc/grpc-js';
import { Dirent } from 'fs';

async function bootstrap() {
  const port = process.env.PORT || '50051';

  // const helloProto = join(__dirname, './proto/hello.proto');
  // const healthCheckProto = join(__dirname, './proto/health.proto');

  const path = join(__dirname, './proto');
  const filelist: Dirent[] = await fs.readdir(path, {
    withFileTypes: true,
  });

  const protoFiles = filelist
    .filter((dirent) => dirent.name.endsWith('.proto'))
    .map((dirent) => dirent.parentPath + '/' + dirent.name);

  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.GRPC,
      options: {
        url: `0.0.0.0:${port}`,
        protoPath: protoFiles,
        package: ['hello', 'grpc.health.v1'],
        onLoadPackageDefinition: (pkg, server) => {
          new ReflectionService(pkg).addToServer(server);
        },
        credentials: ServerCredentials.createInsecure(),
      },
    },
  );

  app.listen();
}
bootstrap();
