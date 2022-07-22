import { Component, Input, OnInit ,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {
 @Input () name:any
 @Input () detail:any
 @Output () updatedata= new EventEmitter()


  constructor() { }

  ngOnInit(): void {
  }



}
