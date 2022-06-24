import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }
@Input() cdata=0
@Output() ctop=new EventEmitter<string>()
  ngOnInit(): void {
  }

}
