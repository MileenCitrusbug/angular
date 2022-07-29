import { Component, Input, OnInit ,Output,EventEmitter} from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})


export class Child2Component implements OnInit {
//  @Input () name:any
//  @Input () detail:any
 @Output () updatedata:EventEmitter<any> =new EventEmitter()

 formdetail:any
  constructor() { }

  ngOnInit(): void {
  }
  formdata(data:NgForm){
  // console.log(data);
  this.formdetail=data
  // console.log(this.formdetail);
  
  this.updatedata.emit(this.formdetail)
  
}


}
