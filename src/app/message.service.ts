import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }
  getMessage(): Promise<string> {
    const message = 'Hello Guys';
    return new Promise(resolve => {
      setTimeout(() => resolve(message), 3000);
    });
  }

  getMsg() {
    return 'Service Injected..!';
  }
}
