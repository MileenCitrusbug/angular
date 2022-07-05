import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup,Validator, Validators  } from '@angular/forms'

@Component({
  selector: 'app-reactiveform-validation',
  templateUrl: './reactiveform-validation.component.html',
  styleUrls: ['./reactiveform-validation.component.css']
})

export class ReactiveformValidationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  reactiveform = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required,  Validators.email]),
    number:  new FormControl('', [Validators.required, Validators.minLength(10),Validators.maxLength(12) ]),
    password: new FormControl('', [Validators.required ,Validators.pattern("(?=^.{8,}$)(?=.*\d)(?=.*[!@#$%^&*]+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$")])
  })


  subform(data:any){
    console.log(data)
  }

  get name(){
  return this.reactiveform.get('name')
  }
  get email(){
    return this.reactiveform.get('email')
  }
  get num(){
    return this.reactiveform.get('number')
  }
  get pass(){
    return this.reactiveform.get('password')
  }
}
