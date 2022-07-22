import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {MemberdataService } from '../service/memberdata.service'

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {



  ngOnInit(): void {
 }
 memberdata:any
 constructor(private member:MemberdataService)
 {this.memberdata=member.member()}

}


//  constructor(private member:MemberdataService){
//  this.memberdata=member.member()
//  console.log(this.memberdata)
//  }



