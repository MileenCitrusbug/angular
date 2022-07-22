import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http:HttpClient) { }

    userdata={}
    ud="hey"


    adduser(body:any){
 
  

    return  this.http.post('http://43.204.196.131:9300/api/v1/signup/',body)
    

    } 
  

   login(body:any){
    return this.http.post('http://43.204.196.131:9300/api/v1/login/',body)
   }


   otpVerification(body:any){
    return this.http.post('http://43.204.196.131:9300/api/v1/otp-verify/',body)
   }

  forgotpass(body:any){
    return this.http.put('http://43.204.196.131:9300/api/v1/forgot-password/',body)
  }

  getuser(){
    return this.http.get(`http://43.204.196.131:9300/api/v1/edit-profile/${localStorage.getItem('id')}`)
  }

  updateUser(body:any){
    return this.http.put(`http://43.204.196.131:9300/api/v1/edit-profile/${localStorage.getItem('id')}/`,body)
  }

  getUserData(){
    console.log("dataonpage",this.userdata)
   return this.userdata

  }

  sendUserData(data:any){
    
  this.userdata=data
  console.log("updatedata",this.userdata)  
  this.getUserData()
}



}
