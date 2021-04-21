import {
  Component,
  DoCheck,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, DoCheck {
  loading: boolean;
  error: boolean = false;
  vacio:boolean = false;
  products: any = [];
  shoppingCart: any = [];

  constructor(
    private productService: ProductService,
    private shoppingCartService: ShoppingCartService
  ) {
    this.loading = true;
  }
  ngDoCheck(): void {
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

  ngOnInit(): void {
    this.shoppingCart = this.shoppingCartService.getShoppingCart();
    //Si hay productos en cache
    if (
      this.getWithExpiry('products_cache') !== null &&
      this.getWithExpiry('products_cache').length > 0
    ) {
      this.products = this.getWithExpiry('products_cache');
      console.log('Hay', this.products.length, ' productos');
      console.log('Loaded from cache');
      this.loading = false;
    } else {
      this.getProducts();
      console.log('Loaded from DB');
    }
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
            this.setWithExpiry('products_cache', this.products, 120000);
            this.loading = false;
          }
          else{
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

  /**
   * Establece un elemento en localStorage
   * durante un tiempo determinado
   * @param key nombre del elemento en el localStorage
   * @param value contenido del elemento
   * @param ttl tiempo que dura "vivo" el elemento
   */
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

  /**
   * Obtiene los elementos con el nombre indicado.
   * Solo obtendrá los elementos si el tiempo de vida
   * es válido. Si no, no los cogerá
   * @param key nombre o identificador del elemento a obtener
   * @returns
   */
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

  /**
   * Agrega el producto con ID determinado al carrito
   * @param idProducto id del producto a agregar al carrito
   */
  async addToCart(idProducto: Number) {
    await this.productService.getProductByID(idProducto).subscribe(
      (res) => {
        //Actualizamos el array local
        this.shoppingCart.push(res.products);
        //Pasamos el nuevo array a la cache
        sessionStorage.setItem(
          'shoppingCart',
          JSON.stringify(this.shoppingCart)
        );
        console.log(this.shoppingCart);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
