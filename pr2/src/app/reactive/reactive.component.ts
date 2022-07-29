import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, EmailValidator, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  constructor() { }
 @Output() formdata=new EventEmitter
userform= new FormGroup({
  name: new FormControl ("",[Validators.required,Validators.minLength(4)]),
  email: new FormControl ("",[Validators.required,Validators.email]),
  number: new FormControl ("",[Validators.required, Validators.maxLength(11),Validators.minLength(9)])
})

  ngOnInit(): void {
  }
saveform(data:any){
  console.log(data)
  this.formdata.emit(data)
  this.userform.reset
}
}

