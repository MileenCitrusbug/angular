import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  constructor() { }
@Input() chaildval=""
@Input() chaildval2=""
  ngOnInit(): void {
  }
name=''
black=0
style="color: rgba(0, 0, 0, 0.5);"
visible= true
val1=false
autho=true
val2='0'
val3='0'
val4= 1
arr:any[]=[]
val5='black'
data=[
  {name:'raj',college:'ljiet',subject:['cs', 'maths','dec']},
  {name:'meet',college:'ms uni',subject:['eg', 'env','stru']},
  {name:'rohan',college:'adit',subject:['c++', 'python','dev']},
  {name:'yash',college:'ldce',subject:['social', 'crp','vvi']},
  {name:'tony',college:'st. zeviasrs',subject:['cs', 'eg','c++']}
]
val6=''
val7:number=0







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
// console.log(a)
this.style="color: rgba(0, 0, 0,"+a+" );"
console.log(this.style)
}

toggle(){

  // this.visible==true? this.visible=false : this.visible= true
  this.visible =! this.visible
}

ifelse(value1:string){
 value1.length==0?this.val1=false:this.val1=true

}

multiif(value2:string)
{
this.val2=value2  
}



scase(value3:string)
{
this.val3=value3
// console.log(value3)
}


floop(value4:any)
{
this.val4=value4
console.log(this.val4)
for(let  i=0; i<=value4; i++){
// {console.log(this.arr)
  this.arr.push(i);} 
}

nloop(value5:string)
{
this.val5=value5
}



}
