import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/API/api.service';
import { User } from 'src/app/model/users';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
users:User[]=[];
  constructor(private apiservice:ApiService) { }

  ngOnInit(): void {this.fetchData()
  }



  fetchData() {
    this.apiservice. getAllUser().subscribe(data=>{
    console.log(data);
    this.users=data
    
      // this.users=data
    })
  
  }
}
