import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor() { }

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





