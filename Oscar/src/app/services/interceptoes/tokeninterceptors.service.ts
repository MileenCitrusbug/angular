import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokeninterceptorsService implements HttpInterceptor {

  constructor() { }

  intercept(req, next) {

    let tokenreq= req.clone({
      setHeaders:{
        Authorization: 'bearer '
      }
    })
     
  }
}
