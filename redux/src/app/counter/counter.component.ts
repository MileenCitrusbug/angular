import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';

import { Observable } from 'rxjs';
import { decrement, increment, reset } from '../counter.action';


@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  number : Observable<number>;
  constructor(private store:Store<{count : number}>) { 
    this.number= store.pipe(select('count'))
  }
  increment(){
    this.store.dispatch(increment() )
  }
  decrement(){
    this.store.dispatch(decrement())
  }
  reset(){
    this.store.dispatch(reset())
  }

  ngOnInit(): void {
  }

}
