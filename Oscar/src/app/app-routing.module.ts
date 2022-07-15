import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { AboutComponent } from './pages/about/about.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EditProfileComponent } from './pages/edit-profile/edit-profile.component';
import { ErrorComponent } from './pages/error/error.component';
// import { FirstloginComponent } from './pages/firstlogin/firstlogin.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { OtpVerificationComponent } from './pages/otp-verification/otp-verification.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { AuthService } from './services/auth/auth.service';

const routes: Routes = [
  {path:"login", component:LoginComponent}, 
  {path:"dashboard",component:DashboardComponent,canActivate:[AuthGuard]},
  {path:"registration",component:RegistrationComponent},
  {path:"otp_verification", component:OtpVerificationComponent,canActivate:[AuthGuard]},
  {path:"edit_profilr", component:EditProfileComponent,canActivate:[AuthGuard]},
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
