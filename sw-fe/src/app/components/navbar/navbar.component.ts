import { Component, DoCheck, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  Router,
  RouterLinkActive,
  RouterState,
} from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth.service';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit, DoCheck {
  title: any = '';
  shoppingCartItems: any;
  cartItems: Number = 0;
  isWorker:boolean = true;

  constructor(
    private shoppingCartService: ShoppingCartService,
    private router: Router,
    private _authService: AuthService
  ) {
    this.title = 'Smart Warehouse';
    if(this._authService.cUser!.role === 'customer'){
      this.isWorker = false;
    }
  }
  ngDoCheck(): void {
    this.updateCarrito();
  }

  ngOnInit(): void {
    this.updateCarrito();
  }

  updateCarrito() {
    this.shoppingCartItems = this.shoppingCartService.getShoppingCart();
    if (this.shoppingCartItems != null) {
      this.cartItems = this.shoppingCartItems.length;
    } else {
      this.cartItems = 0;
    }
  }

  logout() {
    localStorage.clear();
    this.router.navigateByUrl('login');
  }
}
