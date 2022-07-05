import { Component, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { EventsComponent } from './events/events.component';
import { HomeComponent } from './home/home.component';
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
    path: '**'
  },
 
 


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
