import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ShipmentCompaniesService {

  URL: string = '';

  shipmentCompanies:any=[];

  constructor(private http: HttpClient) {
    this.URL = environment.URL + environment.port;
  }

  getCompanies():Observable<any> {
    return this.http.get(this.URL+'/shipmentcompanies');
  }
}
