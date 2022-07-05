import { Component, OnInit,Input} from '@angular/core';
import{NgForm}from '@angular/forms'
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }
@Input() multiuse:{name:string,college: string}={name:'',college:''};
  ngOnInit(): void {
  }

formdata(data:NgForm){
console.log(data)
}


}
