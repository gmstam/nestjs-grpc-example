import { Module } from '@nestjs/common';
import { HelloController } from './hero.controller';
import { AppService } from './app.service';
import { APP_FILTER, APP_GUARD } from '@nestjs/core';
import { ApiKeyGuard } from './auth/auth.guard';
import { ConfigModule } from '@nestjs/config';
import { GrpcServerExceptionFilter } from 'nestjs-grpc-exceptions';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [HelloController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: ApiKeyGuard,
    },
    {
      provide: APP_FILTER,
      useClass: GrpcServerExceptionFilter,
    },
  ],
})
export class AppModule {}
