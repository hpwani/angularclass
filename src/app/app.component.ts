import { NumEnum } from './num-enum';
import { Student } from './student';
import { Component, TemplateRef, ViewChild } from '@angular/core';
import { MessageService } from './message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Class';
  mynunEnum = NumEnum;
//  promiseMsg: Promise<string>;
  // tslint:disable-next-line:no-inferrable-types
  isValid: boolean = true;
  stud1 = new Student(100, 'Raj');
  stud2 = new Student(101, 'Kunal');
  mythenBlock: TemplateRef<any> = null;
  myelseBlock: TemplateRef<any> = null;

  // constructor(private messageService: MessageService) {}

  @ViewChild('firstthenBlock')
  firstthenBlock: TemplateRef<any> = null;
  @ViewChild('secondthenBlock')
  secondthenBlock: TemplateRef<any> = null;
  @ViewChild('firstelseBlock')
  firstelseBlock: TemplateRef<any> = null;
  @ViewChild('secondelseBlock')
  secondelseBlock: TemplateRef<any> = null;

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
  //  this.promiseMsg = this.messageService.getMessage();

    this.mythenBlock = this.firstthenBlock;
    this.myelseBlock = this.firstelseBlock;
  }

  changeThenBlock() {
    this.mythenBlock = this.firstthenBlock === this.firstthenBlock ? this.secondthenBlock : this.firstthenBlock;
  }
  changeElseBlock() {
    this.myelseBlock = this.firstelseBlock === this.firstelseBlock ? this.secondelseBlock : this.firstelseBlock;
  }

  changeable(value: boolean) {
    this.isValid = value;
  }
  change(value: boolean) {
    this.isValid = value;
  }
}
