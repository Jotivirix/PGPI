import { Injectable } from '@angular/core';
import {
  CanActivate,
  CanActivateChild,
  Router,
} from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class CustomerGuard implements CanActivate, CanActivateChild {
  constructor(private _auth: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (!this._auth.isCustomer()) {
      this.router.navigateByUrl('/login');
      return false;
    } else {
      console.log('Customer passed!');
      return true;
    }
  }

  canActivateChild(): boolean {
    if (!this._auth.isCustomer()) {
      this.router.navigateByUrl('/login');
      return false;
    } else {
      return true;
    }
  }
}
