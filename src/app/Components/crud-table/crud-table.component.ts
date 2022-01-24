import { Component, OnInit } from '@angular/core';
import '@cds/core/search/register.js';
import '@cds/core/button/register.js';
import { AddnewComponent } from './addnew/addnew.component';
import {MatDialog} from '@angular/material/dialog';
import '@cds/core/modal/register.js';
import { EditComponent } from './edit/edit.component';
import { ProductServiceService } from '../../Services/product-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crud-table',
  templateUrl: './crud-table.component.html',
  styleUrls: ['./crud-table.component.css'],
  
})
export class CrudTableComponent implements OnInit {
  searchb: any ; 
  products:any[]=[];
  constructor(public dialogueRef:MatDialog ,private ps:ProductServiceService,private router:Router) { }
 
  ngOnInit(): void {
    this.getproducts();
  }
  myFunction(id:string){
     this.ps.Deleteproduct(id).subscribe(()=>{
    
     })
       this.router.navigate(['admin/crud'])
      .then(() => {
        window.location.reload();
      });
  }
  search(){
  if(this.searchb==""){
    this.ngOnInit();
  }else { 
    this.products=this.products.filter(res=>{
      return res.name.toLocaleLowerCase().match(this.searchb)
    })
  }
  }
  getproducts() {
    this.ps.getAllproducts().subscribe(res=>{
      this.products=res ;  
      console.log(res);
    })
  }

  edit(){
    const  EditDialog=this.dialogueRef.open(EditComponent);
    EditDialog.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  openDialog() {
    const dialogRef = this.dialogueRef.open(AddnewComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }}

