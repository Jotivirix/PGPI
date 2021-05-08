import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-reaprovisionamiento',
  templateUrl: './reaprovisionamiento.component.html',
  styleUrls: ['./reaprovisionamiento.component.scss'],
})
export class ReaprovisionamientoComponent implements OnInit {
  reaprovisionamientoForm: FormGroup;
  products: any;
  producto: any;
  id: String = '';
  cargado: boolean = false;
  productos: any;

  constructor(
    private productService: ProductService,
    private _builder: FormBuilder,
    private router: Router
  ) {
    this.reaprovisionamientoForm = this._builder.group({
      producto: ['', Validators.required],
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
            this.products = res.products.filter(function (prod: any) {
              return prod.stock + prod.picking <= prod.warning_stock_limit;
            });
            console.log(this.products);
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

  updateProductos() {
    console.log(this.reaprovisionamientoForm.value.producto);
    let index2 = this.products.findIndex(
      (x: { reference: string }) =>
        x.reference === this.reaprovisionamientoForm.value.producto
    );
    if (index2 !== -1) {
      this.cargado = false;
      this.producto = this.products[index2];
      this.producto.stock = 20;
      //this.producto = this.products.find(this.signupForm.value)
      this.productService.updateProductos(this.producto).subscribe(
        (res) => {
          if(res.status === 'success'){
            alert('Producto Pedido Correctamente');
            this.cargado = true;
            this.router.navigateByUrl('worker');
          }
          else{
            alert('Ocurrió un error al pedir el producto')
            this.router.navigateByUrl('worker');
          }
        },
        (err) => {
          alert('Se ha producido un error. Compruebe su conexión')
          this.router.navigateByUrl('worker');
        }
      );
    }
  }
}
