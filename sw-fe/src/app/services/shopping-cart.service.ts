import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  shoppingCart:any = [];

  constructor() { }

  getShoppingCart() {
    //Cogemos el carrito de la sesion
    if(sessionStorage.getItem('shoppingCart') != null)
    {
      this.shoppingCart = JSON.parse(sessionStorage.getItem('shoppingCart')!);
      sessionStorage.setItem('shoppingCart',sessionStorage.getItem('shoppingCart')!);
    }
    return this.shoppingCart;
  }
}
