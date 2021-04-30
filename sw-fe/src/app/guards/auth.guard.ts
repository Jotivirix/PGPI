import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {

  constructor(private _auth: AuthService, private router: Router) {

  }

  canActivate():boolean {
    if(!this._auth.isAuth())
    {
      this.router.navigateByUrl('/login');
      return false;
    }
    else{
      return true;
    }
  }

  canActivateChild():boolean {
    if(!this._auth.isAuth())
    {
      this.router.navigateByUrl('/login');
      return false;
    }
    else{
      return true;
    }
  }

}
