import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
// import { parse } from 'path';

@Component({
  selector: 'app-empname',
  templateUrl: './empname.component.html',
  styleUrls: ['./empname.component.css']
})

export class EmpnameComponent implements OnInit {
  empData:any
  data:any
  constructor(private router: ActivatedRoute) {  }
@Input () public empname:any
  ngOnInit(): void {
    this.router.queryParams.subscribe((params)=>{
      this.empData=(params)
    
    })

    
    
//     for(var i of this.empData){
//       console.log(typeof(i))
//       // console.log(i.fname)
// // console.log(params)
//     }
    // console.log((this.empData))
    this.getdata()
  }

  getdata(){


   this.data= JSON.parse(this.empData.data)

    
   
  }
}
