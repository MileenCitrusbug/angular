import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http:HttpClient) { }
    adduser(body:any){
 
  

    return  this.http.post('http://43.204.196.131:9300/api/v1/signup/',body)
    

    } 
  

   login(body:any){
    return this.http.post('http://43.204.196.131:9300/api/v1/login/',body)
   }


   otpVerification(body:any){
    return this.http.post('http://43.204.196.131:9300/api/v1/otp-verify/',body)
   }
}
