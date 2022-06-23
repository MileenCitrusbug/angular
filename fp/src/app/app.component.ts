import { isPlatformBrowser } from '@angular/common';
import { Component } from '@angular/core';
import { reduce } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
ipvalue=''  
count=0  
name=true
color= false
ip=''
option=''
fcolor='yellow'
bgcolor='maroon'
aler1(name:any){
  alert(name);
}
eventshow(data:any){
  console.log(data)
}
tsdata(value:string){
this.ipvalue=value
}
counter(type:string){
type==='+1' ? this.count++ :this.count--
}
pbinding(type:boolean){
  type===true ? this.name=false : this.name=true 
}

ifcon(type:boolean){
  type===true ?this.color=false: this.color=true

}
multiif(val:any){
  this.ip=val

}
switchcase(val:any){
  this.option=val
}
fcol(){
this.fcolor=='yellow' ? this.fcolor= 'pink' : this.fcolor='yellow'
}
bgcol(){
  this.bgcolor=='maroon' ? this.bgcolor= 'black' : this.bgcolor='maroon'
}


}
