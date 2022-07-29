import { Component } from '@angular/core';
import {MemberdataService } from './service/memberdata.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practice';
userdata:any

  name="mileen"
  email="xyz@gmail.com"

  perentdata=[
    {name:'raj',college:'ljiet'},
    {name:'meet',college:'ms uni'},
    {name:'rohan',college:'adit'},
    {name:'yash',college:'ldce'},
    {name:'tony',college:'st. zeviasrs'}
  ]

memberdata:any
constructor(private member:MemberdataService){
this.memberdata=member.member()
console.log(this.memberdata)
}

formdata(data:any){
  this.userdata=data
}
}