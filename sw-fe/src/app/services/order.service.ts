import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
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

  getOrders():Observable<any> {
    return this.http.get(this.URL+'/orders');
  }

  getOrderById(idOrder:number):Observable<any> {
    return this.http.get(this.URL+"/orders/"+idOrder);
  }

  generateTag(order:any):Observable<any> {
    return this.http.post(this.URL+'/pdf/tag',order,{ responseType: 'blob' });
  }

  generateDeliveryNote(order:any):Observable<any> {
    return this.http.post(this.URL+'/pdf/delivery_note',order,{ responseType: 'blob' });
  }
  updateOrder(order:any,idOrder:number):Observable<any>{
    return this.http.put(this.URL+'/orders/'+idOrder,order);
  }

}
