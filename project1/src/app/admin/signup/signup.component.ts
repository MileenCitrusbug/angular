import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms'


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
usersignup= new FormGroup({

  name: new FormControl('', [Validators.required]),
  email: new FormControl('', [Validators.required,  Validators.email]),
  number:  new FormControl('', [Validators.required, Validators.minLength(10),Validators.maxLength(12) ]),
  password: new FormControl('', [Validators.required ,Validators.pattern("(?=^.{8,}$)(?=.*\d)(?=.*[!@#$%^&*]+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$")])
})

subform(data:any){
  console.log(data)
}

get name(){
return this.usersignup.get('name')
}
get email(){
  return this.usersignup.get('email')
}
get num(){
  return this.usersignup.get('number')
}
get pass(){
  return this.usersignup.get('password')
}


}
