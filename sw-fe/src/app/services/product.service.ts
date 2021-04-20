import { Injectable, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProductos():Observable<any> {
    return this.http.get('http://localhost:8000/products');
  }

  getProductByID(idProducto:Number):Observable<any> {
    return this.http.get('http://localhost:8000/products/'+idProducto);
  }


}
