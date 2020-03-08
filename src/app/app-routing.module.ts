import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompOneComponent } from './comp-one/comp-one.component';
import { CompTwoComponent } from './comp-two/comp-two.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { StudentComponent } from './student/student.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentRegistrationComponent } from './student-registration/student-registration.component';
import { StudentContactInfoComponent } from './student-contact-info/student-contact-info.component';
import { StudentParentDetailsComponent } from './student-parent-details/student-parent-details.component';
import { BookComponent } from './book/book.component';
import { BookdetailsComponent } from './book/bookdetails/bookdetails.component';
import { AuthGuard } from './auth.guard';
import { DeactivatedGuardGuard } from './deactivated-guard.guard';

const routes: Routes = [
  { path: '', redirectTo: 'compone', pathMatch: 'full' },
  { path: 'compone', component: CompOneComponent },
  { path: 'comptwo', component: CompTwoComponent },
  { path: 'compparent', component: ParentComponent },
  { path: 'book', component: BookComponent },
  { path: 'bookdetails/:id', component: BookdetailsComponent, canDeactivate: [DeactivatedGuardGuard] },

  {
    path: 'student',
    children: [
      { path: '', component: StudentComponent, canActivate: [AuthGuard] },
      { path: 'studentdetails', 
      children: [
        {path: '', component: StudentDetailsComponent},
        {path: 'studentcontactdetails', component: StudentContactInfoComponent},
        {path: 'studentparentdetails', component: StudentParentDetailsComponent}
      ]
       },
      { path: 'studentregestration', component: StudentRegistrationComponent },
    ]

  },
  // { path: 'student', component: StudentComponent },
  // { path: 'studentdetails', component: StudentDetailsComponent },
  // { path: 'studentregestration', component: StudentRegistrationComponent },
  { path: '**', component: ChildComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
