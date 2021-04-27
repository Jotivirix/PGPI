
import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService implements CanActivate {
  URL: string = '';
  role: any;
  token: any;

  constructor(private router: Router, private _userService: UserService) {
    this.URL = environment.URL + environment.port;
  }

  canActivate(): | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    //Cogemos el token del storage
    this.token = localStorage.getItem('token') || null;

    if (!this.token) {
      this.router.navigateByUrl('');
      return Promise.resolve(false);
    }

    return new Promise<boolean>((resolve) => {
      //Podemos acceder a las páginas
      resolve(true);
    });
  }
}
