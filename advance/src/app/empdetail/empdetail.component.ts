import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-empdetail',
  templateUrl: './empdetail.component.html',
  styleUrls: ['./empdetail.component.css']
})
export class EmpdetailComponent implements OnInit {

  constructor(private route:ActivatedRoute ) { }
empdata: any
data: any

@Input () empdetail:any
  ngOnInit(): void { this.route.queryParams.subscribe((params)=>this.empdata=params )
    // console.log(this.empdata)
  this.getdata()}
getdata(){
  this.data= JSON.parse(this.empdata.data)
  // console.log(this.data)
}
}
