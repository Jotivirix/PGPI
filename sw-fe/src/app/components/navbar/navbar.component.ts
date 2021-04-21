import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  title: any = '';

  shoppingCartItems:any;
  cartItems:Number = 0;

  constructor() {
    this.title = 'Smart Warehouse';
  }

  ngOnInit(): void {
    this.shoppingCartItems = JSON.parse(localStorage.getItem('shoppingCart')!);
    if(this.shoppingCartItems != null)
    {
      this.cartItems = this.shoppingCartItems.length;
    }
    else{
      this.cartItems = 0;
    }
  }

}
