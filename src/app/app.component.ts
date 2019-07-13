import { Student } from './student';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Class';
  // tslint:disable-next-line:no-inferrable-types
  isValid: boolean = true;
  stud1 = new Student(100, 'Raj');
  stud2 = new Student(101, 'Kunal');

  changeable(value: boolean) {
    this.isValid = value;
  }
}
