import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from '../interfaces/user';
import {environment} from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  URL:string = '';
  constructor(private http:HttpClient) {
   }
  register(user:any):Observable<any>{
    return this.http.post('http://localhost:8000/users/register',user);
  }
  login(user:any):Observable<any>{
    return this.http.post('http://localhost:8000/users/login',user);

  }
}
