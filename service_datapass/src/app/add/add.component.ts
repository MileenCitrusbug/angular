import { NgForOf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { DatashareService } from '../service/datashare.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
formData:any
  constructor(private apiservice:DatashareService) { }

  ngOnInit(): void {
  }
  formdata(data:NgForm){
    console.log(data)

    this.apiservice.addData(data)
  }

}
