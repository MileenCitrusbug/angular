import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MemberdataService } from '../service/memberdata.service';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css']
})
export class MemberDetailComponent implements OnInit {
memberdata:any
  constructor(private route:ActivatedRoute, private member:MemberdataService) {this.memberdata=member.member() }

  ngOnInit(): void {console.log("userid is :" ,this.route.snapshot.paramMap.get('id') ) 
  }

}
