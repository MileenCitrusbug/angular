import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdduserComponent } from './pages/adduser/adduser.component';
import { UserlistComponent } from './pages/userlist/userlist.component';

const routes: Routes = [
  {path:"",component:UserlistComponent},
  {path:'adduser', component:AdduserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
