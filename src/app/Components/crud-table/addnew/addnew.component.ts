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
      priceTtc:new FormControl(), 
      Rem:new FormControl(), 
    }
    this.form=this.fb.group(formcontrols)
  }

  ngOnInit(): void {
  }
  addthis(){
    //var formdata : any = new FormData();
    //formdata.append("name",this.form.value.name);
    //formdata.append("quantity", Number(this.form.value.quantity));
    //formdata.append("price", Number(this.form.value.price));
    //formdata.append("priceTtc", Number(this.form.value.priceTtc));
    //formdata.append("rem", Number(this.form.value.Rem));
   // let body = JSON.stringify(formdata);
   let  data :any={
     "name":  this.form.value.name , 
     "quantity":Number(this.form.value.quantity),
     "price":Number(this.form.value.price),
      "priceTtc":Number(this.form.value.priceTtc),
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
