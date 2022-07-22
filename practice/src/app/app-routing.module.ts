import { Component, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { EventsComponent } from './events/events.component';
import { HomeComponent } from './home/home.component';
import { MemberDetailComponent } from './member-detail/member-detail.component';
import { MembersComponent } from './members/members.component';
import { ReactiveformValidationComponent } from './reactiveform-validation/reactiveform-validation.component';
import { TempformValidationComponent } from './tempform-validation/tempform-validation.component';

const routes: Routes = [
  {
    component: EventsComponent,
    path: 'events'
  },
  {
    component: ReactiveformValidationComponent,
    path: 'reactiveform'
  },
  {
    component: TempformValidationComponent,
    path: 'tempform'
  },
  {
    component: HomeComponent,
    path: ''
  },
  {
    component: MembersComponent,
    path: 'members',
    children:[{
      path:'memberdetail', component:MemberDetailComponent    }]
  },
  {
    component: ErrorComponent,
    path: '**'
  },
  {
    component: MemberDetailComponent,
    path: 'members/:id'
  },
 
 


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
