import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-reaprovisionamiento',
  templateUrl: './reaprovisionamiento.component.html',
  styleUrls: ['./reaprovisionamiento.component.scss']
})
export class ReaprovisionamientoComponent implements OnInit {
  signupForm :FormGroup;
  products:any;
  producto:any;
  id:String= '';
  cargado: boolean = false;

  constructor(private productService: ProductService,private _builder: FormBuilder) {
    this.signupForm = this._builder.group({
      producto: ['']
    });
   }

  ngOnInit(): void {
    this.getProducts();
  }

  async getProducts(): Promise<any> {
    this.productService.getProductos().subscribe(
      (res) => {
        if (res.status == 'success') {
          if (res.products.length > 0) {
            this.products = res.products;
            console.log(this.products)
            this.cargado = true;
          } else {
            console.log('No Hay Productos');
            this.products = [];
          }
        }
      },
      (err) => {
        console.log(err);
        this.products = [];
      }
    );
  }
  findProducto(ids:string)
{
  return this.products.id === ids;
}

updateProductos(){

    console.log(this.signupForm.value.producto)
    //this.producto = this.products.find();
    this.producto = this.products[this.signupForm.value.producto - 1]
    this.producto.stock = 20;
    console.log(this.producto);
    //this.producto = this.products.find(this.signupForm.value)
    this.productService.updateProductos(this.producto).subscribe(
      (res) => {
        console.log(res)
      },
      (err) => {
        console.log(err)
      }
    );
  }
}
