import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, CanActivate, Router, UrlTree } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../interfaces/user';
import { UserService } from './user.service';
import { map } from 'rxjs/operators';
import jwtDecode from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  URL: string = '';
  role: any;
  token: any;
  cUser: User | undefined;
  currentUser: Observable<User> = new Observable<User>();
  cUserSubject: BehaviorSubject<User> | undefined;

  constructor(private http: HttpClient) {
    this.URL = environment.URL + environment.port;
    this.readToken();
  }

  login(user: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'aplication/json',
    });
    return this.http
      .post(this.URL + '/users/login', user, { headers: headers })
      .pipe(
        map((res: any) => {
          if (res['token']) {
            this.token = res['token'];
            this.saveToken();
          }
          return res;
        })
      );
  }

  saveToken() {
    localStorage.setItem('token', this.token);
    //Decodificamos el usuario
    const user: User = jwtDecode(this.token);
    this.cUserSubject = new BehaviorSubject<User>(user);
    this.currentUser = this.cUserSubject.asObservable();
  }

  readToken() {
    this.token = localStorage.getItem('token');
    if (this.token) {
      //Decodificamos el usuario
      const user: User = jwtDecode(this.token);
      this.cUserSubject = new BehaviorSubject<User>(user);
      this.currentUser = this.cUserSubject.asObservable();
    }
  }

  isAuth(): boolean {
    if (!this.token || this.token.length < 2) {
      return false;
    } else {
      this.cUser = jwtDecode(this.token);
    }

    const nowDate = new Date();
    const now = Number(nowDate.getTime().toString().slice(0, -3));

    if (now < this.cUser!.exp) {
      return true;
    } else {
      return false;
    }
  }

  isWorker(): boolean {
    const user: User = jwtDecode(this.token);
    return user.role === 'worker';
  }

  isCustomer(): boolean {
    const user: User = jwtDecode(this.token);
    return user.role === 'customer';
  }
}
