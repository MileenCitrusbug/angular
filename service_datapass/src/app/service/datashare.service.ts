import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DatashareService {
resData=[
  {name:'rasial',address:'rajpath-rangoli road, ahmedabad',co_num:7285858505}
]
  constructor(private rout:Router) { }

  getdata(){
    
    // console.log(this.resData)
    return this.resData
  }
  addData(data:any){
    this.resData.push(data)
    this.rout.navigate(['./detail'])


  }
}
