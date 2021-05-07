import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { Product } from 'src/app/interfaces/product';

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
  limit: number = 0;
  amountForm: FormGroup;
  order: any = [];
  cart: any = [];

  product: Product = {
    reference: '',
    description: '',
    stock: 0,
    picking: 0,
    warning_stock_limit: 0,
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
          //Miramos si el producto está en el carrito
          let index = this.cart.findIndex(
            (x: { reference: string }) => x.reference === this.product.reference
          );
          console.log(index);
          if (index !== -1) {
            this.totalAmount =
              res.products['stock'] +
              res.products['picking'] -
              this.cart[index].amount;
            this.totalAmount = this.totalAmount > 20 ? 20 : this.totalAmount;
          } else {
            this.totalAmount =
              res.products['stock'] + res.products['picking'] > 20
                ? 20
                : res.products['stock'] + res.products['picking'];
          }
          console.log(this.totalAmount);
          this.loading = false;
          console.log(this.product);
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
    } else {
      this.cart.push(order);
    }
    this.limit += order.amount;
    console.log(this.limit);
    if (index !== -1) {
      this.totalAmount =
        this.product['stock'] +
        this.product['picking'] -
        this.cart[index].amount;
      this.totalAmount = this.totalAmount > 20 ? 20 : this.totalAmount;
    } else {
      this.totalAmount =
      this.product['stock'] + this.product['picking'] > 20
          ? 20
          : this.product['stock'] + this.product['picking'];
    }
    console.log(this.totalAmount);
    //Pasamos a sesion el carrito
    localStorage.setItem('shoppingCart', JSON.stringify(this.cart));
    console.log(this.cart);
  }
}
