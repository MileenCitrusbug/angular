import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { HomeComponent } from './home/home.component';
// import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';


@NgModule({
  declarations: [
    HomeComponent,
    // LoginComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  exports: [
    HomeComponent,
    // LoginComponent,
    SignupComponent
  ]
})
export class UserModule { }
