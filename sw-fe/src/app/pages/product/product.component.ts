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

  loading:boolean;
  idProducto:number;

  producto: Product = {
    reference: '',
    description: '',
    stock: 0,
    picking: 0,
    warning_stock: 0,
    image: '',
    provider_id: 0,
    location_id: '',
    precio: 2
  };

  constructor(private route: ActivatedRoute, private _productService: ProductService) {
    this.loading = true;
    this.idProducto = 0;
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      console.log(params); //log the entire params object
      this.idProducto = params['id'];
    });
    this.getProducto(this.idProducto);
  }

  async getProducto(idProducto:Number){
    await console.log(this._productService.getProductByID(idProducto).subscribe(res => {
        this.producto = res.products;
        this.loading = false;
    }))
  }

  //function to return list of numbers from 0 to n-1
  numSequence(n: number): Array<number> {
    return Array(n);
  }

}
