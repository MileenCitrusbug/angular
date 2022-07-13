import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { EditProfileComponent } from './pages/edit-profile/edit-profile.component';
import { ErrorComponent } from './pages/error/error.component';
// import { FirstloginComponent } from './pages/firstlogin/firstlogin.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { OtpVerificationComponent } from './pages/otp-verification/otp-verification.component';
import { RegistrationComponent } from './pages/registration/registration.component';

const routes: Routes = [
  {path:"login", component:LoginComponent}, 
  // {path:"home",component:HomeComponent},
  {path:"registration",component:RegistrationComponent},
  {path:"otp_verification", component:OtpVerificationComponent},
  {path:"edit_profilr", component:EditProfileComponent},
  // {path:"firstlogin", component:FirstloginComponent},
  {path:"",component:HomeComponent },
  {path:"about", component:AboutComponent},
  {path:"contact", component:ContactusComponent},
  {path:"**", component:ErrorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
