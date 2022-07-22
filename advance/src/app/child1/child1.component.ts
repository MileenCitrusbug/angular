import { Component, Input, OnInit, Output } from '@angular/core';
import {MatButtonModule} from '@angular/material/button'
@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})

export class Child1Component implements OnInit {

  constructor() { }
  @Input () pdata=""
  @Output () 

  ngOnInit(): void {
  }
}
