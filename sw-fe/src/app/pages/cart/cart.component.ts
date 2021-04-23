import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  displayedColumns: string[] = ['Producto', 'Unidades'];
  dataSource: any = [];
  shoppingCart: any = [];
  products: any = [];
  order: any = {
    user_id: '',
    datetime: new Date(),
    status: 'in progress',
    shipment_company_id: 1,
    street: '',
    number: 1,
    city: '',
    zip_code: '',
    country: '',
    products: '',
  };

  sinProductos: boolean = false;

  constructor(private shoppingCartService: ShoppingCartService) {}

  ngOnInit(): void {
    this.shoppingCart = this.shoppingCartService.getShoppingCart();
    this.dataSource = this.shoppingCart;
    if (this.shoppingCart.length > 0) {
      this.sinProductos = false;
    } else {
      this.sinProductos = true;
    }
    console.log(typeof(this.shoppingCart))
  }

  groupBy = (array: any, key: any) => {
    return array.reduce((result: any, obj: any) => {
      (result[obj[key]] = result[obj[key]] || []).push(obj);
      return result;
    }, []);
  };

  removeElements() {
    console.log('Empty Cart Clicked');
    //Vaciamos el shoppingCartGrouped
    this.shoppingCart = [];
    //Vaciamos la variable de sesion del shoppingcart
    sessionStorage.setItem('shoppingCart', JSON.stringify([]));
    this.dataSource = this.shoppingCart;
    this.sinProductos = true;
  }

  generateOrder() {
    this.shoppingCart.forEach((product: any) => {
      let prod = {
        reference: product.reference,
        amount: product.amount,
      };
      this.products.push(prod);
      this.order.products = this.products;
    });
    console.log(this.order);
  }
}
