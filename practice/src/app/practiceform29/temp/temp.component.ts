import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-temp',
  templateUrl: './temp.component.html',
  styleUrls: ['./temp.component.css']
})
export class TempComponent implements OnInit {

  constructor() { }
@Input() name=""
@Input() email=""
  ngOnInit(): void {
  }
  formdata(data:any){
    console.log(data)
  }
}