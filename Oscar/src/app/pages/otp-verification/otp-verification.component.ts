import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/API/api.service';

@Component({
  selector: 'app-otp-verification',
  templateUrl: './otp-verification.component.html',
  styleUrls: ['./otp-verification.component.css']
})
export class OtpVerificationComponent implements OnInit {

  constructor(private apiservice:ApiService ,private http:HttpClient, private router:Router) { }

  ngOnInit(): void {
  }
 otpForm= new FormGroup({
 otp : new FormControl('',Validators.required)
  

 })



 submitOTP(data:any){

  console.log(data)
const otpbody =[
{
  "otp": data.otp,
  "unique_id":localStorage.getItem('userid')
}]
// console.log(otpbody)

this.apiservice.otpVerification(otpbody).subscribe((data:any)=> console.log(data)
  
)


 }
}
