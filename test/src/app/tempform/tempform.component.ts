import { Component, OnInit, Output ,EventEmitter} from '@angular/core';
// import { EventEmitter } from 'stream';

@Component({
  selector: 'app-tempform',
  templateUrl: './tempform.component.html',
  styleUrls: ['./tempform.component.css']
})



export class TempformComponent implements OnInit {
@Output() tempformdata = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }
regformvalue(userdata:any){


  console.log(userdata)
  this.tempformdata.emit(userdata)

}


}
