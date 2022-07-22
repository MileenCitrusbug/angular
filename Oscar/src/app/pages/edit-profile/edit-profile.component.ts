import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/API/api.service';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
 userData:any
//  updateUserForm:FormGroup
  constructor(private apiservice:ApiService , private router:Router,userform:FormBuilder ) {}
 
  newpass:any[]=[]

  warning= false
  ngOnInit(): void {
    
    this.userData=this.apiservice.getUserData() 
      // this.updateUserForm.patchValue({
      // fname: this.userData.fname,
      // lname: this.userData.lname,
      // email: this.userData.email,
      // company: this.userData.company,
      // })}
 
   this.getUserData()


  }

  updateUserForm = new FormGroup({

    fname : new FormControl(``,[Validators.required]),
    lname : new FormControl(``,[Validators.required]),
    email : new FormControl(``,[Validators.required]),
    company : new FormControl(``,[Validators.required]),
    currentPass : new FormControl('',[Validators.required]),
    newPass : new FormControl('',[]),
    confirmPass : new FormControl('',[])
  })


getUserData(){
  this.updateUserForm.patchValue({
    fname: this.userData.fname,
    lname: this.userData.lname,
    email: this.userData.email,
    company: this.userData.company,
    })}

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
    // localStorage.setItem('lname',data.data.last_name)
    // localStorage.setItem('fname',data.data.first_name)
    // localStorage.setItem('email',data.data.email)
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



