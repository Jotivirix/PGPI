import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { OrderService } from 'src/app/services/order.service';
import { ShipmentCompaniesService } from 'src/app/services/shipment-companies.service';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { UserService } from 'src/app/services/user.service';

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
    user_id: '',
    status: 'pending',
    shipment_company_id: '',
    street: this._authService.cUser?.street,
    number: this._authService.cUser?.number,
    city: this._authService.cUser?.city,
    zip_code: this._authService.cUser?.zip_code,
    country: this._authService.cUser?.country,
    products: '',
  };
  formOrder: FormGroup;
  shipmentCompanies: any = [];
  loading: boolean = true;
  noProducts: boolean = false;
  pedidoRealizado:boolean = false;

  constructor(
    private _shoppingCartService: ShoppingCartService,
    private _builder: FormBuilder,
    private _orderService: OrderService,
    private _shipmentCompaniesService: ShipmentCompaniesService,
    private _router: Router,
    private _authService: AuthService
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
      shipment_company_id: [1, Validators.required],
    });
    this.getShipmentCompanies();
  }


  ngOnInit(): void {
    this.shoppingCart = this._shoppingCartService.getShoppingCart();
    this.dataSource = this.shoppingCart;
    if (this.shoppingCart.length > 0) {
      this.noProducts = false;
    } else {
      this.noProducts = true;
    }
  }

  removeElements() {
    //Vaciamos el shoppingCartGrouped
    this.shoppingCart = [];
    //Vaciamos la variable de sesion del shoppingcart
    localStorage.setItem('shoppingCart', JSON.stringify([]));
    this.dataSource = this.shoppingCart;
    this.noProducts = true;
  }

  async generateOrder() {
    this.order.user_id = this._authService.cUser?.id;
    this.products = [];
    this.shoppingCart.forEach((product: any) => {
      let prod = {
        reference: product.reference,
        amount: product.amount,
      };
      this.products.push(JSON.stringify(prod));
      this.order.products = this.products;
    });
    this.order = Object.assign(this.order, this.formOrder.value);
    console.log(this.order);
    this.loading = true;
    this._orderService.makeOrder(this.order).subscribe(
      (res) => {
        this.pedidoRealizado = true;
        if (res['status'] == 'success') {
          //Vaciamos carrito
          localStorage.removeItem('shoppingCart');
          //PopUp Confirmacion Pedido
          alert('Pedido Realizado Correctamente');
          this._shoppingCartService.emptyCart();
          this._router.navigate(['/'])
        }
        else{
          this.pedidoRealizado = false;
          console.log(res);
          let index = this.shoppingCart.findIndex(
            (x: { reference: string }) => x.reference === res.reference
          );
          this.shoppingCart[index].amount = res.max_units;
          localStorage.setItem('shoppingCart',JSON.stringify(this.shoppingCart));
          alert('Error al realizar el pedido.\n'+res.message+
          '\nSe establece el numero de unidades de '+res.reference+' a '+res.max_units);
        }
        this.loading = false;
      },
      (err) => {
        alert('Se ha producido un error con la conexión. Compruébela e inténtelo más tarde');
        console.log(err);
        this.loading = false;
      }
    );
  }

  getShipmentCompanies() {
    this._shipmentCompaniesService.getCompanies().subscribe(
      (res) => {
        if (res.status == 'success') {
          this.shipmentCompanies = res.shipment_companies;
          this.loading = false;
        }
      },
      (err) => {
      }
    );
  }
}
