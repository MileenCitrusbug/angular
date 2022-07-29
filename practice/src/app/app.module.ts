import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{FormsModule}from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventsComponent } from './events/events.component';
import { FormComponent } from './form/form.component';
import {} from 'ngx-bootstrap';
import { ConverterPipe } from './pipes/converter.pipe';
import { TempformValidationComponent } from './tempform-validation/tempform-validation.component';
import { ReactiveformValidationComponent } from './reactiveform-validation/reactiveform-validation.component';
import { ReactiveFormsModule } from'@angular/forms';
import { HomeComponent } from './home/home.component';
import { MembersComponent } from './members/members.component';
import { ErrorComponent } from './error/error.component';
import { MemberDetailComponent } from './member-detail/member-detail.component';
import { ReactiveComponent } from './practiceform29/reactive/reactive.component';
import { TempComponent } from './practiceform29/temp/temp.component'


@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    FormComponent,
    ConverterPipe,
    TempformValidationComponent,
    ReactiveformValidationComponent,
    HomeComponent,
    MembersComponent,
    ErrorComponent,
    MemberDetailComponent,
    ReactiveComponent,
    TempComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
