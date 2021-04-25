import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  URL: string = '';

  constructor(private http: HttpClient) {
    this.URL = environment.URL + environment.port;
  }

  getProductos(): Observable<any> {
    return this.http.get(this.URL + '/products');
  }

  getProductByID(idProducto: Number): Observable<any> {
    return this.http.get(this.URL + '/products/' + idProducto);
  }
}
