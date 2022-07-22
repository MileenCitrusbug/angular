import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { elementAt } from 'rxjs';
import { ApiService } from '../../services/API/api.service'

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private apiservice: ApiService, private router: Router) { }

  ngOnInit(): void {
  }
  registrationForm = new FormGroup({
    fname: new FormControl('', [Validators.required]),
    lname: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    number: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(12)]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)

    ])
  })


  submitRegistration(data: any) {
    console.log(data)
  if (this.registrationForm.valid)
{
    const postbody = {
      email: data.email,
      first_name: data.fname,
      last_name: data.lname,
      // company_type: 5,
      // company_role: 3,
      password: data.password,
      phone: data.number,
    };
    // console.log(postbody)



    this.apiservice.adduser(postbody).subscribe((data: any) => {
      if (data.status === true) {
        // alert(data.message)
        // alert(data.status)
        this.router.navigate(['login'])
      }
      
    }
    )
  }
else{

  this.validateFields(this.registrationForm)

}
}


validateFields(formgroup:FormGroup){
  Object.keys(formgroup.controls).forEach(field => {  
    const control = formgroup.get(field);            
    if (control instanceof FormControl) {             
        control.markAsTouched({ onlySelf: true });
    } else if (control instanceof FormGroup) {        
        this.validateFields(control);  
    }
});
}
  

  get fname() {
    return this.registrationForm.get('fname')
  }
  get lname() {
    return this.registrationForm.get('lname')
  }
  get email() {
    return this.registrationForm.get('email')
  }
  get num() {
    return this.registrationForm.get('number')
  }
  get pass() {
    return this.registrationForm.get('password')
  }


  setData() {
    // console.log( this.registrationForm.('fname')?.value)

    this.registrationForm.patchValue({
      fname: "mileen"
    })
  }



}





