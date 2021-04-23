import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { OrderService } from 'src/app/services/order.service';
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
    user_id: 3,
    status: 'in progress',
    shipment_company_id: 1,
    street: '',
    number: 1,
    city: '',
    zip_code: '',
    country: '',
    products: '',
  };
  formOrder: FormGroup;

  sinProductos: boolean = false;

  constructor(
    private _shoppingCartService: ShoppingCartService,
    private _builder: FormBuilder,
    private _orderService: OrderService
  ) {
    this.formOrder = this._builder.group({
      street: ['', Validators.required],
      number: ['', Validators.required],
      city: ['', Validators.required],
      zip_code: [
        '',
        [Validators.required, Validators.minLength(5), Validators.maxLength(5)],
      ],
      country: ['', Validators.required],
      shipment_company_id: [''],
    });
  }

  ngOnInit(): void {
    this.shoppingCart = this._shoppingCartService.getShoppingCart();
    this.dataSource = this.shoppingCart;
    if (this.shoppingCart.length > 0) {
      this.sinProductos = false;
    } else {
      this.sinProductos = true;
    }
    console.log(typeof this.shoppingCart);
  }

  removeElements() {
    console.log('Empty Cart Clicked');
    //Vaciamos el shoppingCartGrouped
    this.shoppingCart = [];
    //Vaciamos la variable de sesion del shoppingcart
    localStorage.setItem('shoppingCart', JSON.stringify([]));
    this.dataSource = this.shoppingCart;
    this.sinProductos = true;
  }

  async generateOrder() {
    this.shoppingCart.forEach((product: any) => {
      let prod = {
        reference: product.reference,
        amount: product.amount,
      };
      this.products.push(JSON.stringify(prod));
      this.order.products = this.products;
    });
    this.order = Object.assign(this.order, this.formOrder.value);
    console.log('Order');
    console.log(this.order);
    await this._orderService.makeOrder(this.order).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
