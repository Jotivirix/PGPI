import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  shoppingCart: any = [];
  shoppingCartGrouped:any = [];

  constructor(private shoppingCartService: ShoppingCartService) {}

  ngOnInit(): void {
    this.shoppingCart = this.shoppingCartService.getShoppingCart();
    this.shoppingCartGrouped = Object.values(this.groupBy(this.shoppingCart, "reference"));
    console.log(this.shoppingCartGrouped);
  }

  groupBy = (array:any, key:any) => {
    return array.reduce((result:any, obj:any) => {
       (result[obj[key]] = result[obj[key]] || []).push(obj);
       return result;
    }, []);
 };
}
