import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  loading: boolean;
  idProduct: number;

  product: Product = {
    reference: '',
    description: '',
    stock: 0,
    picking: 0,
    warning_stock: 0,
    image: '',
    provider_id: 0,
    location_id: ''
  };

  constructor(
    private route: ActivatedRoute,
    private _productService: ProductService
  ) {
    this.loading = true;
    this.idProduct = 0;
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      console.log(params); //log the entire params object
      this.idProduct = params['id'];
    });
    this.getProducto(this.idProduct);
  }

  async getProducto(idProducto: Number) {
    await this._productService.getProductByID(idProducto).subscribe(
      (res) => {
        if (res.status == 'success') {
          this.product = res.products;
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
}
