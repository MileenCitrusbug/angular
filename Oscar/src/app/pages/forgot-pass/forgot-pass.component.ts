import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { ApiService } from 'src/app/services/API/api.service';

@Component({
  selector: 'app-forgot-pass',
  templateUrl: './forgot-pass.component.html',
  styleUrls: ['./forgot-pass.component.css']
})
export class ForgotPassComponent implements OnInit {

  constructor(private apiservice:ApiService, private router:Router) { }

  ngOnInit(): void {
  }
  passform= new FormGroup({

    email: new FormControl('', [Validators.required,Validators.email])
  })

  submitpass(data:any){

    const emailbody= {
      email:data.email
    }
  
  this.apiservice.forgotpass(emailbody).subscribe((data:any)=>{ 
    if (data.status === false){
    alert(data.message)}
  else
  alert("Email send successfully")

  }
  ,
  err => {alert("Please enter registered email id")}
  )
  
  
  }
  get email() {
    return this.passform.get('email')
  }

}
