import { Component, DoCheck, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, DoCheck {

  title: any = '';

  shoppingCartItems:any;
  cartItems:Number = 0;

  constructor(private shoppingCartService: ShoppingCartService) {
    this.title = 'Smart Warehouse';
  }
  ngDoCheck(): void {
    this.updateCarrito();
  }

  ngOnInit(): void {
    this.updateCarrito();
  }

  updateCarrito(){
    this.shoppingCartItems = this.shoppingCartService.getShoppingCart();
    if(this.shoppingCartItems != null)
    {
      this.cartItems = this.shoppingCartItems.length;
    }
    else{
      this.cartItems = 0;
    }
  }

}
