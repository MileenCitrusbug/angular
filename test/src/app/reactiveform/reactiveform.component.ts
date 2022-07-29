import { Component,  EventEmitter,  Input,  OnInit, Output  } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import {emailCheck}  from './validator.directive'

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})


export class ReactiveformComponent implements OnInit {
  @Output() childToPerant:EventEmitter<any>=new EventEmitter()
  @Input() fname=""
  @Input() lname=""
  @Input() email=""
  

  constructor() { }
reactiveForm:any
emailvalid:boolean=false
  ngOnInit(): void {
    this.reactiveForm= new FormGroup({
      fname:new FormControl(this.fname, [Validators.required]),
      lname: new FormControl(this.lname,Validators.required),
      email: new FormControl (' ',[Validators.required,Validators.email,emailDomainValidator])
    })
   
  }
  getFormval(data:any){
console.log(data);
this.childToPerant.emit(data)

  }

get emailvalue(){
  return this.reactiveForm.get('email')
}

emailcheck(email:string){
  // const email=this.reactiveForm.get('email')
  // console.log(email);
  
  const domain= email.substring(email.lastIndexOf('@'));
  if(domain=="@gmail.com" || domain=="@outlook.com" ) {
    this.emailvalid=false
  }
  else{
    this.emailvalid=true
  }
}

}
// function emailCheck(control:AbstractControl){[key : String] : Boolean} | null =>{
//   const email:string=control.value;
//   const domain= email.substring(email.lastIndexOf('@')+1);
//   if (domain=="gmail.com" || domain=="outlook.com"){
//     return null;
//   }
//   else{
//     return {'emailCheck':true}
//   }
// }


// function emailCheck():ValidatorFn
// {
//   return(control:AbstractControl):{[key:string]:any }| null=>
// {
//   const email=control.value
//   const length = email.length()
//   const domain= email.substring(email.lastIndexOf('@')+1);
//   if (length<10
//     // domain=="gmail.com" || domain=="outlook.com"
//     ){
//          return null
//      }
//    else { return {wrong_email:'wrong domain'}}
// };}

function emailDomainValidator(control: FormControl) {
  let email = control.value; (2)
  if (email && email.indexOf("@") != -1) { 
    let [_, domain] = email.split("@");
    if (domain !== "codecraft.tv") { 
      return {
        emailDomain: {
          parsedDomain: domain
        }
      }
    }
  }
  return null; 
}