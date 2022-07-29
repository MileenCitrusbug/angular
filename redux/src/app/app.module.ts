import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { counterReducer } from './counter.reducers';
import { CounterComponent } from './counter/counter.component';
import { HeaderComponent } from './pages/header/header.component';
import { UserlistComponent } from './pages/userlist/userlist.component';
import { AdduserComponent } from './pages/adduser/adduser.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { materialize } from 'rxjs';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule} from '@angular/material/button'
import { HttpService } from './API/http.service';
import { ApiService } from './API/api.service';
import {HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    HeaderComponent,
    UserlistComponent,
    AdduserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({count: counterReducer}),
    BrowserAnimationsModule,
    MatToolbarModule, MatButtonModule,
  HttpClientModule
  ],
  providers: [HttpService,ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
