import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'test';
  formValue:any[]=[]
fname="mileen"
lname="patel"
email="xyz@gmail/outlook.com"

dataFromChild(data:any){
  console.log(data.fname)
this.formValue.push(data)
console.log(this.formValue)

}

gettemdata(regformdata:any){
  console.log(regformdata)

}

}
