import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/API/api.service';


@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  userData: any
  //  updateUserForm:FormGroup
  constructor(private apiservice: ApiService, private router: Router, userform: FormBuilder) { }

  newpass: any

  updateUserForm = new FormGroup({

    fname: new FormControl(``, [Validators.required]),
    lname: new FormControl(``, [Validators.required]),
    email: new FormControl(``, [Validators.required]),
    company: new FormControl(``, [Validators.required]),
    currentPass: new FormControl('', [Validators.required]),
    newPass: new FormControl('', []),
    confirmPass: new FormControl('', [])
  })

  warning = false
  ngOnInit(): void {

    this.apiservice.getuser().subscribe((data: any) => {
      // console.log(data.data)

      this.userData = { "fname": data.data.first_name, "lname": data.data.last_name, "email": data.data.email, "company": data.data.company_name }
      // console.log(this.userData.fname)

      this.updateUserForm.patchValue({
        fname: data.data.first_name,
        lname: data.data.last_name,
        email: data.data.email,
        company: data.data.company_name,
      })
    })
  }

  logout() {
    localStorage.clear()
    this.router.navigate([''])
  }

  submitUser(data: any) {
    // console.log(data)
    const detailbody = {
      first_name: data.fname,
      last_name: data.lname,
      company_name: data.company,
      password: data.newPass,
      current_password: data.currentPass
    }

    this.apiservice.updateUser(detailbody).subscribe((data: any) => {
      // console.log(detailbody)
      if (data.status === true) {
        // alert(data.data)
        this.router.navigate(['dashboard'])
      }
    })
  }

  newpassword(data: any) {
    this.newpass = data
    this.warning = true
    // console.log(this.newpass)
  }


  confpassword(data: any) {
    if (data == this.newpass) {
      this.warning = false
    }
    else {
      this.warning = true
    }
  }
}





