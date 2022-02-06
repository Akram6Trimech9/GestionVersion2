import { CommaExpr } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommandeService } from 'src/app/Services/commande.service';

@Component({
  selector: 'app-showone',
  templateUrl: './showone.component.html',
  styleUrls: ['./showone.component.css']
})
export class ShowoneComponent implements OnInit {

  constructor(private route: ActivatedRoute,private CommandeService:CommandeService,    private router: Router
    ) { }

  ngOnInit(): void {
 this.getdetails(this.route.snapshot.params['id'])
  }
  commande;
getdetails(id){
  this.CommandeService.getCommandebyid(id).subscribe(res=>{
    this.commande=res;    
    console.log(res);
  })
}
back() {
  this.router.navigate(['/historique'])
}

}
