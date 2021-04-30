import {
  Component,
  DoCheck,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, DoCheck {
  loading: boolean;
  error: boolean = false;
  vacio: boolean = false;
  products: any = [];
  shoppingCart: any = [];
  role: any;

  constructor(
    private productService: ProductService,
    private shoppingCartService: ShoppingCartService
  ) {
    this.loading = true;
  }

  ngDoCheck(): void {
    this.shoppingCart = this.shoppingCartService.getShoppingCart();
  }

  ngOnInit(): void {
    this.shoppingCart = this.shoppingCartService.getShoppingCart();
    this.getProducts();
  }

  /**
   * Obtenemos los productos del backend
   */
  async getProducts(): Promise<any> {
    this.productService.getProductos().subscribe(
      (res) => {
        if (res.status == 'success') {
          if (res.products.length > 0) {
            this.products = res.products;
            console.log(this.products);
            this.loading = false;
          } else {
            console.log('No Hay Productos');
            this.products = [];
            this.loading = false;
            this.vacio = true;
          }
        }
      },
      (err) => {
        console.log(err);
        this.products = [];
        this.loading = false;
        this.error = true;
      }
    );
  }
}
