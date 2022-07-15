import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from  '@angular/forms'
import {ApiService}from '../../services/API/api.service'
import {Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private apiservice:ApiService,private router:Router) { }

  ngOnInit(): void {
  }


  loginForm =new FormGroup({
    email: new FormControl('', [Validators.required,  Validators.email]),
    password: new FormControl('', [Validators.required ,Validators.pattern("(?=^.{8,}$)(?=.*\d)(?=.*[!@#$%^&*]+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$")])

  })


submitlogin(data:any){

  console.log(data)

  const loginbody = {
  email: data.email,
  password: data.password,

    }  ;
console.log(loginbody)



   this.apiservice.login(loginbody).subscribe((data : any) =>{localStorage.setItem('userid',data.data.userid),this.router.navigate(['otp_verification'])},
    (userid:any)=>{
    console.log (userid)
      
 
    })



}


  get email(){
    return this.loginForm.get('email')
  }
  get pass(){
    return this.loginForm.get('password')
  }
}
