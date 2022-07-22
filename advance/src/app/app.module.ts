import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmpnameComponent } from './empname/empname.component';
import { EmpdetailComponent } from './empdetail/empdetail.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    Child1Component,
    Child2Component,
    EmpnameComponent,
    EmpdetailComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
