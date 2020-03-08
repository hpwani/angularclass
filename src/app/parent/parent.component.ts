import { MyServiceService } from '../my-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
  providers: [MyServiceService]
})
export class ParentComponent implements OnInit {
  isShow = true;
  txt: string;
  constructor(private myService: MyServiceService) {
  }

  ngOnInit() {
    this.txt = this.myService.myMethod();
  }

  onClick() {
    this.txt = this.myService.myTestMethod();
  }
}
