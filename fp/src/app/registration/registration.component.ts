import { Component, OnInit,  Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor() { }
  @Output() ctop=new EventEmitter<string>()
  ngOnInit(): void {
  }

}
