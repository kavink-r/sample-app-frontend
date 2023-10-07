import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { product } from 'src/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apihost:string=environment.apihost;
  apiport:string=environment.apiport;
  apiUrl:string="http://"+this.apihost+":"+this.apiport;
  constructor(private http:HttpClient ) { }

  public getAllProducts():Observable<product[]>{
    return this.http.get<product[]>(this.apiUrl+"/api/product/all")
  }

  public getProductById(id:number):Observable<product>{
    return this.http.get<product>(this.apiUrl+"/api/product/"+id);
  }
  public addProduct(p:product):Observable<product>{
    return this.http.post<product>(this.apiUrl+"/api/product/add",p);
  }
  public deleteProduct(p:product):Observable<string>{
    return this.http.delete<string>(this.apiUrl+"/api/product/delete/"+p.id);
  }
}
