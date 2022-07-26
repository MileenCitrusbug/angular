import { Component, Injectable, OnInit } from '@angular/core';
import { DatashareService } from '../service/datashare.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
@Injectable()
export class DetailComponent implements OnInit {
  data:any
  constructor(private apiservice:DatashareService) { }


  ngOnInit(): void {this.getdata()
  }
getdata(){

this.data= this.apiservice.getdata()
console.log(this.data);
  }

}
