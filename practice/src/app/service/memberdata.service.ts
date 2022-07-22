import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MemberdataService {

  constructor() { }
  member(){
  return[
    {name:'Mileen', email:'mileen@gamil.com',id:1,number:8460156501},
    {name:'Yash', email:'yash@gamil.com',id:2,number:541232984},
    {name:'Raj', email:'raj@gamil.com',id:3,number:5413215421},
    {name:'Dev', email:'dev@gamil.com',id:4,number:65485432135}
  ]
  }}
