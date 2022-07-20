import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/API/api.service';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  constructor(private apiservice:ApiService , private router:Router ) { }
  // updateUserForm :FormGroup
  newpass:any

  warning= false
  ngOnInit(): void {
  }


updateUserForm = new FormGroup({

  fname : new FormControl(`${localStorage.getItem('fname')}`,[Validators.required]),
  lname : new FormControl(`${localStorage.getItem('lname')}`,[Validators.required]),
  email : new FormControl(`${localStorage.getItem('email')}`,[Validators.required]),
  company : new FormControl(`${localStorage.getItem('company')}`,[Validators.required]),
  currentPass : new FormControl('',[Validators.required]),
  newPass : new FormControl('',[]),
  confirmPass : new FormControl('',[])



})
// getUserData(){
//   this.updateUserForm.patchValue({
//   fname: localStorage.getItem('fname'),
//   lname: localStorage.getItem('lname'),
//   email: localStorage.getItem('email'),
//   company: localStorage.getItem('company')
//   })

logout(){
  localStorage.clear()
  this.router.navigate([''])
  
  }



  
submitUser(data:any){
  // console.log(data)
 

  
  const detailbody= {
    first_name: data.fname,
    last_name: data.lname,
    company_name: data.company,
    password: data.newPass,
    current_password: data.currentPass
  }

  this.apiservice.updateUser(detailbody).subscribe((data: any) => {
    console.log(detailbody)
    if (data.status === true) {
      alert(data.data)
      // alert(data.status)
      this.router.navigate(['dashboard'])
      // console.log(data.data.lname)
      // console.log(data.data.email)
    localStorage.setItem('lname',data.data.last_name)
    localStorage.setItem('fname',data.data.first_name)
    localStorage.setItem('email',data.data.email)
    // localStorage.setItem('currentpass',data.data.currentPass)  
      }
    else { alert(data.message) }
  })
}

newpassword(data:any)
{
  this.newpass=data
  this.warning=true
  // console.log(this.newpass)
}


confpassword(data:any){
  if(data== this.newpass){
    // console.log("data")
    this.warning=false
  }
  else{
    this.warning=true
  }
}

}



