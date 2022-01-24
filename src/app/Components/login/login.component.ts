import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
form:FormGroup;
Adminpass="admin" ; 
Adminid="admin"
  constructor(private router: Router,private fb:FormBuilder,private toastr: ToastrService) { let formcontrols={
    username:new FormControl(),
    password:new FormControl(), 
  }
  this.form=this.fb.group(formcontrols) }

  ngOnInit(): void {
  }
  submit(){
    if((this.form.value.username==this.Adminid)&&(this.form.value.password==this.Adminpass)){
      this.router.navigateByUrl('/admin/crud');
    }else{
      this.toastr.success('Hello world!', 'Toastr fun!');
    }
  }
}
