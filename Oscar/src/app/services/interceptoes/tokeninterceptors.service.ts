import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokeninterceptorsService implements HttpInterceptor {

  constructor(private injector:Injector) { }

  intercept(req:any, next:any) {
    let authservice =  this.injector.get(AuthService) 
    let tokenreq= req.clone({
      setHeaders:{
        Authorization: ` Bearer ${authservice.gettoken()}`
      }
    })
     return next.handle(tokenreq)
  }
}
