import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  URL: string = '';

  constructor(private http: HttpClient) {
    this.URL = environment.URL + environment.port;
  }

  makeOrder(order: any):Observable<any> {
    return this.http.post(this.URL+'/orders',order);
  }
}
