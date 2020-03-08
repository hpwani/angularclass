import { MessageService } from './message.service';
import { NumEnum } from './num-enum';
import { Student } from './student';
import { Component, TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  preserveWhitespaces: true
})
export class AppComponent {
  numValue: any;
  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  showComp(val) {
    if (val == 1) {
      this.router.navigate(['/compone']);
    } else {
      this.router.navigate(['/comptwo']);
    }
  }

}
