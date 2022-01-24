import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  profileForm = new FormGroup({
    Option: new FormControl(''),
  });
  countries=[
    {id:1,name:"none"},
    {id:2,name:"name"},
    {id:3,name:"quantité"},
    {id:4,name:"les deux"}
  ];
  selectedData=null ;
  public onChangeSelected($event:any) {
    console.log(this.profileForm.value)
  }  constructor(private fb: FormBuilder) { };
  

  ngOnInit(): void {
  }

}
