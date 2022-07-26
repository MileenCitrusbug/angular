import { Component, OnInit } from '@angular/core';
import{FormsModule}from '@angular/forms'
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] 

})
export class AppComponent implements OnInit{
  
   empdata=[
    {name:"mileen",email:"mileen@gmail.com",salary:"20000"},
    {name:"raj",email:"raj@gmail.com",salary:"22000"},
    {name:"jay",email:"jay@gmail.com",salary:"18000"},
    {name:"tony",email:"tony@gmail.com",salary:"30000"},
    {name:"john",email:"john@gmail.com",salary:"15000"},
    {name:"rio",email:"rio@gmail.com",salary:"29000"},
    {name:"maya",email:"maya@gmail.com",salary:"21000"},
  
  ]
  constructor(private router:Router){}
  ngOnInit() {
    

  }
  title = 'advance';



  text="Select the option to show data (PtoC)"



  // addEmp(name:string,email:string,salary:number){
  // this.empdata.push({name:name,email:email,salary:salary})

  // }
  getdata(data:any){
    // alert("afsdgbv")
    console.log(data)
    this.empdata.push(data)


  }



  empname(){
  this.router.navigate(['empname'],{queryParams :{data:JSON.stringify(this.empdata)}})
  // console.log(this.empdata)
}

empdetail(){

  this.router.navigate(['empdetail'],{queryParams:{data:JSON.stringify(this.empdata)}})
  // console.log(this.empdata)
}


}


