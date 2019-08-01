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
  country = 'India';
  colSpanValue = '3';
  isbold: true;
  varsize = 40;
  applyMultiCls = "colorCls";
  spanCls = "titleClrCls sizeCls";
  isTrue: boolean = true;
  isFalse: boolean = false;
  isDisabled: boolean = true;
  isShow: boolean = true;
  msg: string;
  // msg: Promise<string>;
  // constructor(private message: MessageService) {}
  // ngOnInit() {
  //   this.msg = this.message.getMessage();
  // }

  addStyle() {
    let varcss = {
      'font-weight' : this.isbold ? 'bold' : 'normal',
      'font-style' : 'italic',
      'font-size.px' : this.varsize
    }
    return varcss;
  }

  applycss() {
    let clscss = {
      titleClrCls: this.isTrue,
    }
    return clscss;
  }

  applyspancss() {
    let clscss = {
      colorCls: this.isTrue,
      styleCls: this.isTrue,
      sizeCls: this.isTrue,
    }
    return clscss;
  }

  clickMe() {
    this.isDisabled =! this.isDisabled;
  }

  clk() {
    this.isShow =! this.isShow;
  }

  setMsg(data: string) {
    this.msg = data;
  }


  Allperson = [
    {id: 101, name: 'Ram'},
    {id: 102, name: 'Krishna'},
    {id: 103, name: 'Ketki'},
    {id: 104, name: 'Ravi'}
  ];

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
