import { MessageService } from './message.service';
import { NumEnum } from './num-enum';
import { Student } from './student';
import { Component, TemplateRef, ViewChild } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  preserveWhitespaces: true
})
export class AppComponent {
  title = 'Angular Class';
  // msg: Promise<string>;
  // constructor(private message: MessageService) {}
  // ngOnInit() {
  //   this.msg = this.message.getMessage();
  // }

  myThenBlock: TemplateRef<any> = null;
  myElseBlock: TemplateRef<any> = null;

  @ViewChild('firstthenblock')
  firstthenblock: TemplateRef<any> = null;

  @ViewChild('secondthenblock')
  secondthenblock: TemplateRef<any> = null;

  @ViewChild('firstelseblock')
  firstelseblock: TemplateRef<any> = null;

  @ViewChild('secondelseblock')
  secondelseblock: TemplateRef<any> = null;

  ngOnInit() {
    this.myThenBlock = this.firstthenblock;
    this.myElseBlock = this.firstelseblock;
  }

  changeThanblock() {
    this.myThenBlock = this.myThenBlock === this.firstthenblock ? this.secondthenblock : this.firstthenblock;
  }

  changeElseblock() {
    this.myElseBlock = this.myElseBlock === this.firstelseblock ? this.secondelseblock : this.firstelseblock;
  }

}
