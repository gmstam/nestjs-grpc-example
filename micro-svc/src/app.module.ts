import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_FILTER } from '@nestjs/core';
import { GrpcServerExceptionFilter } from 'nestjs-grpc-exceptions';
import { AppService } from './app.service';
import { HealthCheckController } from './health.controller';
import { HelloController } from './hello.controller';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [HelloController, HealthCheckController],
  providers: [
    AppService,
    {
      provide: APP_FILTER,
      useClass: GrpcServerExceptionFilter,
    },
  ],
})
export class AppModule {}
