import { Metadata } from '@grpc/grpc-js';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  appendAuthMetadata() {
    const apiKey = process.env.API_KEY;
    const metadata = new Metadata();
    metadata.add('x-api-key', apiKey);
    return metadata;
  }
}
