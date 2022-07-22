import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-empdetail',
  templateUrl: './empdetail.component.html',
  styleUrls: ['./empdetail.component.css']
})
export class EmpdetailComponent implements OnInit {

  constructor() { }
@Input () empdetail:any
  ngOnInit(): void {
  }

}
