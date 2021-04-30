import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
  CanActivateChild,
} from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class WorkerGuard implements CanActivate, CanActivateChild {
  constructor(private _auth: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (!this._auth.isWorker()) {
      this.router.navigateByUrl('/login');
      return false;
    } else {
      return true;
    }
  }

  canActivateChild(): boolean {
    if (!this._auth.isWorker()) {
      this.router.navigateByUrl('/login');
      return false;
    } else {
      return true;
    }
  }
}
