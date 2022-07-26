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
import {MatButtonModule} from '@angular/material/button';

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
    FormsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
