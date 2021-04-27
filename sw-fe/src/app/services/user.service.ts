import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from 'src/environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  URL:string = '';

  public userCreate = new BehaviorSubject<any>('');
  cast = this.userCreate.asObservable();

  constructor(private http:HttpClient) {
    this.URL = environment.URL + environment.port;
   }
  register(user:any):Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type':'aplication/json'
    })
    return this.http.post(this.URL+'/users/register',user,{headers:headers});
  }
  login(user:any):Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type':'aplication/json'
    })
    return this.http.post(this.URL+'/users/login',user,{headers:headers});

  }
  getUsuario(userTok:any):Observable<any>{
    
    return this.http.post(this.URL+'/users/login',userTok);

  }
  editUser(user:any){
    this.userCreate.next(user);
  }
}