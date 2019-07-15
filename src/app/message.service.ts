import { Injectable } from '@angular/core';
import { resolve } from 'path';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }
  getMessage(): Promise<string> {
    const message = 'Hello Hemant';
    // tslint:disable-next-line: no-shadowed-variable
    return new Promise(resolve => {
      setTimeout(() => resolve(message), 3000);
    });
  }
}
