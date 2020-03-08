import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { WelcomePipe } from './welcome.pipe';
import { BoldPipe } from './bold.pipe';
import { CustomDirectiveDirective } from './custom-directive.directive';
import { NgIfStructuralDirectiveDirective } from './ng-if-structural-directive.directive';
import { NgModule } from '@angular/core';
import { CompOneComponent } from './comp-one/comp-one.component';
import { CompTwoComponent } from './comp-two/comp-two.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { StudentComponent } from './student/student.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentRegistrationComponent } from './student-registration/student-registration.component';
import { StudentContactInfoComponent } from './student-contact-info/student-contact-info.component';
import { StudentParentDetailsComponent } from './student-parent-details/student-parent-details.component';
import { BookComponent } from './book/book.component';
import { BookdetailsComponent } from './book/bookdetails/bookdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    ParentComponent,
    WelcomePipe,
    BoldPipe,
    CustomDirectiveDirective,
    NgIfStructuralDirectiveDirective,
    CompOneComponent,
    CompTwoComponent,
    StudentComponent,
    StudentDetailsComponent,
    StudentRegistrationComponent,
    StudentContactInfoComponent,
    StudentParentDetailsComponent,
    BookComponent,
    BookdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularMultiSelectModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
