import { Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, DoCheck {

  loading:boolean;
  error:boolean = false;
  products:any = [];
  shoppingCart:any = [];

  constructor(private productService: ProductService) {
    this.loading = true;
  }

  ngDoCheck(): void {
    console.log('Docheck');
  }


  ngOnInit(): void {
    //Cogemos el carrito de la sesion
    if(sessionStorage.getItem('shoppingCart') != null)
    {
      console.log('Hay productos en el carrito');
      this.shoppingCart = JSON.parse(sessionStorage.getItem('shoppingCart')!);
      sessionStorage.setItem('shoppingCart',sessionStorage.getItem('shoppingCart')!);
    }
    //Si hay productos en cache
    if (this.getWithExpiry('products_cache') !== null) {
      this.products = this.getWithExpiry('products_cache');
      console.log('Loaded from cache');
      this.loading = false;
    } else {
      this.getProducts();
      console.log('Loaded from DB');
    }
  }

  async getProducts(): Promise<any> {
    this.productService.getProductos().subscribe(
      (res) => {
        if (res.status == "success") {
          this.products = res.products;
          this.setWithExpiry('products_cache', this.products, 120000);
          this.loading = false;
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

  setWithExpiry(key: string, value: any, ttl: any) {
    const now = new Date();
    // `item` is an object which contains the original value
    // as well as the time when it's supposed to expire
    const item = {
      value: value,
      expiry: now.getTime() + ttl,
    };
    localStorage.setItem(key, JSON.stringify(item));
  }

  getWithExpiry(key: string): any {
    const itemStr = localStorage.getItem(key);
    // if the item doesn't exist, return null
    if (!itemStr) {
      return null;
    }
    const item = JSON.parse(itemStr);
    const now = new Date();
    // compare the expiry time of the item with the current time
    if (now.getTime() > item.expiry) {
      // If the item is expired, delete the item from storage
      // and return null
      localStorage.removeItem(key);
      return null;
    }
    return item.value;
  }

  async addToCart(idProducto: Number) {
    await this.productService.getProductByID(idProducto).subscribe((res) => {
      //Actualizamos el array local
      this.shoppingCart.push(res.products);
      //Pasamos el nuevo array a la cache
      sessionStorage.setItem('shoppingCart', JSON.stringify(this.shoppingCart));
      console.log(this.shoppingCart);
    });
  }
}
