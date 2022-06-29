import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
name=''
black=0
style="color: rgba(0, 0, 0, 0.5);"
visible= true
val1=false
autho=true






getboxval(boxv:string){
  console.log(boxv)
  alert(boxv)
this.name=boxv
}

getname(bname:string)
{
  this.name=bname
}

mover(){
  console.log("mouse over from name")
}

shade(data:string){
data==='+'?this.black++:this.black--
let a=this.black/10
console.log(a)
this.style="color: rgba(0, 0, 0,"+a+" );"
console.log(this.style)
}

toggle(){

  this.visible==true? this.visible=false : this.visible= true
}

ifelse(value1:string){
 value1.length==0?this.val1=false:this.val1=true

}


}
