import { Component, OnInit } from '@angular/core';
import { Childenum } from './childenum'

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  city = 'Pune';
  chlidMonthEnum = Childenum;
  students = {
    name: 'Raj',
    age: 25
  };
  constructor() { }

  change() {
    this.city = 'Mumbai';
  }

  ngOnInit() {
  }

}
