import { Component, DoCheck, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  loading: boolean;
  idProduct: number;
  amount: number = 0;
  totalAmount: number = 0;
  amountForm: FormGroup;
  order: any = [];
  cart: any = [];

  product: Product = {
    reference: '',
    description: '',
    stock: 0,
    picking: 0,
    warning_stock: 0,
    image: '',
    provider_id: 0,
    location_id: '',
  };

  constructor(
    private route: ActivatedRoute,
    private _productService: ProductService,
    private _shoppingCartService: ShoppingCartService,
    private _builder: FormBuilder
  ) {
    this.loading = true;
    this.idProduct = 0;
    this.amountForm = this._builder.group({
      amount: 1,
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      console.log(params); //log the entire params object
      this.idProduct = params['id'];
    });
    this.getProducto(this.idProduct);
    this.cart = this._shoppingCartService.getShoppingCart();
    console.log(this.cart);
  }

  async getProducto(idProducto: number) {
    await this._productService.getProductByID(idProducto).subscribe(
      (res) => {
        if (res.status == 'success') {
          this.product = res.products;
          this.totalAmount = res.products['stock'] + res.products['picking'] > 20 ? 20 : this.totalAmount;
          this.loading = false;
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }

  //function to return list of numbers from 0 to n-1
  numSequence(n: number): Array<number> {
    return Array(n);
  }

  addToCart() {
    //Agregamos la orden al carrito
    let order = {
      reference: this.product.reference,
      amount: Number(this.amountForm.get('amount')?.value),
    };

    let index = this.cart.findIndex(
      (x: { reference: string }) => x.reference === this.product.reference
    );

    if (index !== -1) {
      this.cart[index].amount += order.amount;
    }
    else{
      this.cart.push(order);
    }
    this.totalAmount -= order.amount;
    //Pasamos a sesion el carrito
    localStorage.setItem('shoppingCart', JSON.stringify(this.cart));
    console.log(this.cart);
  }
}
