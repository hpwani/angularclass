import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }
  getMessage(): Promise<string> {
    let message = 'Hello Guys';
    return new Promise(resolve => {
      setTimeout(() => resolve(message), 3000);
    });
  }
}
