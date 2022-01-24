import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  constructor(private http:HttpClient) { }
  url='http://localhost:8080/commande';
  addnewcommande(commande :any ): Observable<any>{
    return  this.http.post<any>(`${this.url}/addcommande`,commande) 
  }
  getAllCommande() : Observable<any[]>  {
    return this.http.get<any[]>(`${this.url}/getall`);
  } 
}
