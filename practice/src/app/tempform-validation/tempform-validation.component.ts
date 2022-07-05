import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tempform-validation',
  templateUrl: './tempform-validation.component.html',
  styleUrls: ['./tempform-validation.component.css']
})
export class TempformValidationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
signupdata:any[]=[]


signup(data:any){
this.signupdata.push(data)
console.log(this.signupdata)
}
}
