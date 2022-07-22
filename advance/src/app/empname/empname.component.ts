import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-empname',
  templateUrl: './empname.component.html',
  styleUrls: ['./empname.component.css']
})
export class EmpnameComponent implements OnInit {

  constructor() { }
@Input () public empname:any
  ngOnInit(): void {
  }

}
