import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient:HttpClient) { }

  getAllProuducts():Observable<any>{
  return  this.httpClient.get('https://ecommerce.routemisr.com/api/v1/products')
  }

  getSpicificProduct(id:string):Observable<any>{
    return  this.httpClient.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
    }
  
}
