import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { GrpcUnauthenticatedException } from 'nestjs-grpc-exceptions';

@Injectable()
export class ApiKeyGuard implements CanActivate {
  constructor(private readonly configService: ConfigService) {} // made up service for the point of the exmaple

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const metadata = context.switchToRpc().getContext();
    const key = metadata.get('x-api-key')[0];
    return this.validate(key);
  }

  private async validate(apiKey: string) {
    if (this.configService.get<string>('API_KEY') === apiKey) {
      return true;
    }

    throw new GrpcUnauthenticatedException('non autenticato');
  }
}
