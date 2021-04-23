import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  shoppingCart:any = [];

  constructor() { }

  getShoppingCart() {
    //Cogemos el carrito de la sesion
    if(localStorage.getItem('shoppingCart') != null)
    {
      this.shoppingCart = JSON.parse(localStorage.getItem('shoppingCart')!);
      localStorage.setItem('shoppingCart',localStorage.getItem('shoppingCart')!);
    }
    return this.shoppingCart;
  }
}
