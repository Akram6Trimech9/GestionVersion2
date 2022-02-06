import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ProductServiceService } from 'src/app/Services/product-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addnew',
  templateUrl: './addnew.component.html',
  styleUrls: ['./addnew.component.css']
})
export class AddnewComponent implements OnInit {
  form:FormGroup ; 
  constructor(private fb:FormBuilder,private Ps:ProductServiceService,private router:Router) { 
    let formcontrols={
      name:new FormControl(),
      quantity:new FormControl(), 
      price:new FormControl(), 
      Rem:new FormControl(), 
    }
    this.form=this.fb.group(formcontrols)
  }

  ngOnInit(): void {
  }
  addthis(){
   let  data :any={
     "name":  this.form.value.name , 
     "quantity":Number(this.form.value.quantity),
     "price":Number(this.form.value.price),
      "priceTtc":0.0,
      "priceHt": 0.0,
      "rem":Number(this.form.value.Rem)
    }

  console.log(data)
    this.Ps.addnewproduct(data).subscribe(res=>{
    })
    this.router.navigate(['admin/crud'])
    .then(() => {
      window.location.reload();
    });
  }
      


}
