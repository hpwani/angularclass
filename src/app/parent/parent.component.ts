import { Component, OnInit, ContentChild, ViewChild, ChangeDetectorRef } from '@angular/core';
import { MessageService } from '../message.service';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor(private msgService: MessageService,
              private cdref: ChangeDetectorRef) {
    console.log('Parent Constructor Call');
   }
  cData: any;
  myArr: any = ['Angular 2', 'Angular 4', 'Angular 5', 'Angular 6'];

  @ContentChild(ChildComponent)
  childComponent: ChildComponent;

  @ViewChild(ChildComponent)
  childComp: ChildComponent;

  ngOnInit() {
    let msg;
    msg = this.msgService.getMsg();
    console.log('Service Call: ', msg);
    console.log('Parent ngOnInit Call');
  }

  ngAfterContentInit() {
    console.log('Parent ngAfterContentInit called');
  }

  ngAfterContentChecked() {
  //  console.log('ngAfterContentChecked Called');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit Called');
    this.cdref.detectChanges();
  }

  ngAfterViewChecked() {
  //  console.log('ngAfterViewChecked Called');
  }

  addMore() {
    this.myArr.push('Angular 8');
  }

  childFun(value: any) {
    this.cData = value;
  }
}
