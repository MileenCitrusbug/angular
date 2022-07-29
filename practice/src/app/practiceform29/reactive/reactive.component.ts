import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import {validateemail} from '../validators/domailvalidators'

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {
userdata:any

  constructor(private fb : FormBuilder) { }
@Output() formdata=new EventEmitter<any>()

  myForm:any;
  ngOnInit(): void {
    this.myForm=this.fb.group({
      name:['',[Validators.required]],
      email:['',[validateemail,Validators.required,Validators.email]]
    })
  }
  saveForm(data:any){
    console.log(data)
this.userdata=data
this.formdata.emit(data)
}

}
