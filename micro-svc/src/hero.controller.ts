import { Controller } from '@nestjs/common';
import {
  Empty,
  HelloResponse,
  HelloServiceController,
  HelloServiceControllerMethods,
} from './proto/hello';
import { Observable } from 'rxjs';

@Controller()
@HelloServiceControllerMethods()
export class HelloController implements HelloServiceController {
  sayHello(
    request: Empty,
  ): Promise<HelloResponse> | Observable<HelloResponse> | HelloResponse {
    return { message: 'ciao' };
  }
}
