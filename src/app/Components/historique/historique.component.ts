import { Component, OnInit } from '@angular/core';
import { CommandeService } from 'src/app/Services/commande.service';
import { ClarityModule } from "@clr/angular";
import { MatDialog } from '@angular/material/dialog';
import { ShowoneComponent } from './showone/showone.component';

@Component({
  selector: 'app-historique',
  templateUrl: './historique.component.html',
  styleUrls: ['./historique.component.css']
})
export class HistoriqueComponent implements OnInit {

  constructor(private commande:CommandeService,public dialogueRef:MatDialog) { }

  ngOnInit(): void {
    this.getAllcommande()
  }
  public largeModal;
  commandes:any[]=[];
  getAllcommande() {
    this.commande.getAllCommande().subscribe(res=>{
    
      this.commandes=res ;  
      console.log(res);
    })
  }
  searchb: any ; 

  search(){
    if(this.searchb==""){
      this.ngOnInit();
    }else { 
      this.commandes=this.commandes.filter(res=>{
        return res.name.toLocaleLowerCase().match(this.searchb)
      })
    }
    }
    show(){
      const  EditDialog=this.dialogueRef.open(ShowoneComponent);
      EditDialog.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
    }
}
