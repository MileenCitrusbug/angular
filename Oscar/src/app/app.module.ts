import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { LoginComponent } from './pages/login/login.component';
import { OtpVerificationComponent } from './pages/otp-verification/otp-verification.component';
// import { FirstloginComponent } from './pages/firstlogin/firstlogin.component';
import { ForgotPassComponent } from './pages/forgot-pass/forgot-pass.component';
// import { ResetPassComponent } from './pages/reset-pass/reset-pass.component';
import { ErrorComponent } from './pages/error/error.component';
import { EditProfileComponent } from './pages/edit-profile/edit-profile.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { AuthService } from './services/auth/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import {TokeninterceptorsService} from './services/interceptoes/tokeninterceptors.service';


@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    OtpVerificationComponent,
    // FirstloginComponent,
    ForgotPassComponent,
    // ResetPassComponent,
    ErrorComponent,
    EditProfileComponent,
    HomeComponent,
    AboutComponent,
    ContactusComponent,
    DashboardComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule, 
    HttpClientModule,
  ],
  providers: [AuthService,AuthGuard,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: TokeninterceptorsService,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
