import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor(private http:HttpClient) { }
admin(){
  return this.http.get("http://localhost:3000/admin")
}
user(){

  return this.http.get ("http://localhost:3000/users")
}

}
