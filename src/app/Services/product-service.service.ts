import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  constructor(private http:HttpClient) { }
  url='http://localhost:8080/product';
  addnewproduct(product :any ): Observable<any>{
    return  this.http.post<any>(`${this.url}/addProduct`,product) 
  }
  Deleteproduct(id:string) :Observable<any> {
    return this.http.delete<any>(`${this.url}/deleteProduct/${id}`);
  }
   getAllproducts() : Observable<any[]>  {
    return this.http.get<any[]>(`${this.url}/getAllProducts`);
  }
  getproductByid(id:any) :Observable<any>{
    return this.http.get<any>(`${this.url}/getProduct/${id}`)
  }
 

}
