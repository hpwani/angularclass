import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input() pdata: number;
  @Input() parentdata: number;
  @Input() arrList: any[];
  @Output() childEvent = new EventEmitter();
  currValue: string;
  prevValue: string;
  title = 'Hemant';
  constructor() {
    console.log('Child Constructor Call');
   }

  ngOnChanges(changes: any) {
    console.log('ngOnChanges Call');
    // tslint:disable-next-line:forin
    for (const propertyName in changes) {
      const change = changes[propertyName];
      console.log('change: ', change);
      this.currValue = change.currentValue;
      this.prevValue = change.previousValue;
      console.log(propertyName + ': Current Value: ' + this.currValue + ': Previous Value: ' + this.prevValue);
    }
  }

  ngOnInit() {
    console.log('Child ngOnInit Call');
  }

  ngDoCheck() {
  //  console.log('ngDoCheck Called');
  }

  onChange(value: any) {
    this.childEvent.emit(value);
  }

  clickMe() {
    this.title = 'Angular 8 Class';
  }

}
