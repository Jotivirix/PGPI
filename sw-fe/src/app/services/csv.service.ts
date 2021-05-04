import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CsvService {

  URL:string = '';

  constructor(private http: HttpClient) {
    this.URL = environment.URL + environment.port;
  }

  uploadCSV(CSV:any):Observable<any>{
    return this.http.post(this.URL+'/uploadcsv',CSV);
  }
}
