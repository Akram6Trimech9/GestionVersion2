import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  constructor(private http:HttpClient) { }
  url=environment.commandeUrl;
  addnewcommande(commande :any ){
    return  this.http.post<any>(`${this.url}/addcommande`,commande,{responseType: 'blob' as 'json'  }) 
  }
  getAllCommande() : Observable<any[]>  {
    return this.http.get<any[]>(`${this.url}/getAllCommandes`);
  } 
  getCommandebyid(id:any): Observable<any[]>{
    return this.http.get<any[]>(`${this.url}/getcommande/${id}`)
  }
}
