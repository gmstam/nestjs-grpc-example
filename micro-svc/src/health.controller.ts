import { Controller } from '@nestjs/common';
import {
  HealthCheckRequest,
  HealthCheckResponse,
  HealthController,
  HealthCheckResponse_ServingStatus,
  HealthControllerMethods,
} from './proto/health';
import { Metadata } from '@grpc/grpc-js';
import { Observable } from 'rxjs';

@Controller()
@HealthControllerMethods()
export class HealthCheckController implements HealthController {
  check(
    request: HealthCheckRequest,
    metadata?: Metadata,
  ):
    | Promise<HealthCheckResponse>
    | Observable<HealthCheckResponse>
    | HealthCheckResponse {
    return { status: HealthCheckResponse_ServingStatus.SERVING };
  }
}
