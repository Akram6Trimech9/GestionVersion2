import { Component, OnInit } from '@angular/core';
import '@cds/core/input/register.js';
import '@cds/core/icon/register.js';
import { ProductServiceService } from 'src/app/Services/product-service.service';
import { produitVendu } from 'src/app/Models/produitvendu';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { CommandeService } from 'src/app/Services/commande.service';

@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.css']
})
export class PdfComponent implements OnInit {
  form!: FormGroup;
  val=true;
  searchb: any ; 
  products:any[]=[];
  produitsVendus : produitVendu [] = []; 
  constructor(  private fb:FormBuilder,private ps:ProductServiceService,private commandeservice:CommandeService) { 
      let formcontrols={
        clientName:new FormControl(),
        clientAddress:new FormControl(), 
        clientRef:new FormControl(), 
        matriculeFiscale:new FormControl(), 
        netTotale:new FormControl(), 
        htTotale:new FormControl(), 
        remise:new FormControl(), 
      }
      this.form=this.fb.group(formcontrols)
    }

  ngOnInit(): void {
    this.getproducts();
 
  }
  getproducts() {
    this.ps.getAllproducts().subscribe(res=>{
      this.products=res ;  
      console.log(res);
    })
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
     
    addToCommand(id:string){
      this.val=false ;

      if( this.produitsVendus.length > 0) {
        let index = this.produitsVendus.findIndex(pVendu =>{ return pVendu.produit._Id == id} );
        if(index>=0){
          this.produitsVendus[index].quantity= this.produitsVendus[index].quantity + 1;
          this.produitsVendus[index].totalHt= this.produitsVendus[index].totalHt+this.produitsVendus[index].produit.price ;

        }

        else {
          const produitToAdd = this.products[this.products.findIndex(p =>{ return p._Id == id} )]
          this.produitsVendus.push(
            {
              quantity:1,
              totalHt:produitToAdd.price,
              produit:produitToAdd
            }
          )
        }
        
      }  
      else {
        const produitToAdd = this.products[this.products.findIndex(p =>{ return p._Id == id} )]
        this.produitsVendus.push(
          {
            quantity:1,
            totalHt:produitToAdd.price,
            produit:produitToAdd
          }
        )
      }      
      console.log(this.produitsVendus);
      
    }
post(){
  let  data :any={
    "clientName":  this.form.value.clientName , 
    "clientAddress":this.form.value.clientAddress,
    "clientRef":this.form.value.clientRef,
     "produitsVendus":this.produitsVendus
   }
   this.commandeservice.addnewcommande(data).subscribe( data => {
    const blob= new Blob([data], {type:'application/pdf'});

    
    const url = window.URL.createObjectURL(blob); 
    var anchor = document.createElement("a");
 
    anchor.href = url;

    window.open(anchor.href);
   }

   )

  }
 cardItem=[];   
   
    close(){
      this.val=true;
    }
}