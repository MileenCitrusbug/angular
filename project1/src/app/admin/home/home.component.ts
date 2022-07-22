import { Component, OnInit } from '@angular/core';
import { UserdataService } from 'src/app/service/userdata.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {



  ngOnInit(): void {
  }
  admin:any;
  constructor(private userdata:UserdataService){
    this.userdata.admin().subscribe((data)=>{
      this.admin=data
      console.log(this.admin)
  
    })

}}
