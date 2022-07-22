import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
// import { LoginComponent } from './login/login.component';
import {ReactiveFormsModule} from '@angular/forms'
 

@NgModule({
  declarations: [
    HomeComponent,
    SignupComponent,
    
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    HomeComponent,SignupComponent
  ]

})
export class AdminModule { }
