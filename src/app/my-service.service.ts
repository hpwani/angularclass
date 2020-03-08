import { MessageService } from './message.service';
import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class MyServiceService {

  constructor(private messageService: MessageService) { }

  myMethod() {
    return 'Hello Ganpat From Service';
  }

  myTestMethod() {
    return this.messageService.getMsg();
  }
}
