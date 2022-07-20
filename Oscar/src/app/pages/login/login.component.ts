import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { ApiService } from '../../services/API/api.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private apiservice: ApiService, private router: Router) { }

  ngOnInit(): void {
  }


  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)])

  })


  submitlogin(data: any) {

    // console.log(data)
    localStorage.setItem('currentpass',data.password)

    const loginbody = {
      email: data.email,
      password: data.password,

    };
    // console.log(loginbody)



    this.apiservice.login(loginbody).subscribe((data: any) =>
     {
      // console.log(data,"data")
      if (data.status === false) {
        alert(data.message)
        //  localStorage.setItem('userid',data.data.userid),
        //  this.router.navigate(['otp_verification'])
      }
      else {
        alert(data.message),
          localStorage.setItem('userid', data.data.userid),
          this.router.navigate(['otp_verification'])
      }},
      (err:any) => { alert("Please enter valid Email/Password") }
    


      // localStorage.setItem('userid',data.data.userid),this.router.navigate(['otp_verification'])},
      // (userid:any)=>{
      //   if(data.status=== true){
      //     alert(data.message)
      //     // alert(data.status)
      //     this.router.navigate(['login'])}
      //     else{alert(data.message)}
    )
  }


  get email() {
    return this.loginForm.get('email')
  }
  get pass() {
    return this.loginForm.get('password')
  }
}
