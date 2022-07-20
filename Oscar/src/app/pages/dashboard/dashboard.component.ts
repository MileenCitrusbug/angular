import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/API/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router:Router, private http:HttpClient, private apiservice:ApiService) { }

  ngOnInit(): void {
  }
fname= localStorage.getItem('fname')
lname= localStorage.getItem('lname')
logout(){
  localStorage.clear();
  this.router.navigate([''])
}
editProfile(){

this.apiservice.getuser().subscribe((data:any) =>{console.log(data.data)
localStorage.setItem('companyName',data.data.company_name),
localStorage.setItem('fname',data.data.first_name),
localStorage.setItem('lname',data.data.last_name),
localStorage.setItem('email',data.data.email),
localStorage.setItem('fname',data.data.first_name)


})


}


}
