import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { EmpdetailComponent } from './empdetail/empdetail.component';
import { EmpnameComponent } from './empname/empname.component';

const routes: Routes = [
  {path:"child1",component:Child1Component},
  {path:"child2",component:Child2Component},
  {path:"empname",component:EmpnameComponent},
  {path:"empdetail",component:EmpdetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
