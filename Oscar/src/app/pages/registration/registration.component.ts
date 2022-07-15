import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import {ApiService} from '../../services/API/api.service'
 
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private apiservice: ApiService, private router:Router) { }

  ngOnInit(): void {
  }
  registrationForm = new FormGroup({
    fname: new FormControl('', [Validators.required]),
    lname: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required,  Validators.email]),
    number:  new FormControl('', [Validators.required, Validators.minLength(10),Validators.maxLength(12) ]),
    password: new FormControl('', [Validators.required ,Validators.pattern("(?=^.{8,}$)(?=.*\d)(?=.*[!@#$%^&*]+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$")])
  })


  submitRegistration(data:any){
    console.log(data)

    const postbody = {
      email: data.email,
first_name: data .fname,
last_name: data.lname,
// company_type: 5,
// company_role: 3,
password: data.password,
phone: data.number,
      }  ;
console.log(postbody)



     this.apiservice.adduser(postbody).subscribe((data : any) =>{this.router.navigate(['login'])},
      )
  }

  get fname(){
  return this.registrationForm.get('fname')
  }
  get lname(){
    return this.registrationForm.get('lname')
    }
  get email(){
    return this.registrationForm.get('email')
  }
  get num(){
    return this.registrationForm.get('number')
  }
  get pass(){
    return this.registrationForm.get('password')
  }
}





