import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumListService {
  list: number[] = [100];

  constructor() { }

  public addNum(num: number) {
    this.list.push(num);
  }

  public getList() {
    return this.list;
  }
}
