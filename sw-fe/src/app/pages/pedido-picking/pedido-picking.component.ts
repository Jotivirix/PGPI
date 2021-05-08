import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from 'src/app/services/order.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-pedido-picking',
  templateUrl: './pedido-picking.component.html',
  styleUrls: ['./pedido-picking.component.scss'],
})
export class PedidoPickingComponent implements OnInit {
  products: any;
  orderToRequest: number = 0;
  order: any;
  orderProducts: any = [];
  dataSource = new MatTableDataSource();
  client: any;
  constructor(
    private _ordersService: OrderService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  orderUpdate: any;
  length: number = 0;
  pageSizeOptions = [5, 10, 15, 20, 50, 100];
  pageSize: number = 5;
  num_checks: number = 0;
  update: boolean = false;
  loading: boolean = false;
  errorUpdate: boolean = false;
  estadoOk: boolean = false;
  estadoKo: boolean = false;
  columnsToDisplay = ['description', 'amount', 'pasillo', 'estante', 'ready'];
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.orderToRequest = params['id'];
    });
    this.getOrders();
    this.loading = true;
  }
  async getOrders() {
    await this._ordersService.getOrderById(this.orderToRequest).subscribe(
      (res) => {
        if (res.status == 'success') {
          console.log(res);
          this.order = res.order;
          this.order.order_id = res.order.id;
          this.orderProducts = res.order.products;
          this.dataSource.data = this.orderProducts;
          this.client = this.order.user.name + ' ' + this.order.user.surname;
          //Si esta en pending, pasa a in progress
          if (this.order.status === 'pending') {
            this.order.status = 'in progress';
            //Actualizamos el pedido al estado en proceso
            this._ordersService
              .updateOrder(this.order, this.order.id)
              .subscribe(
                (res) => {
                  if(res.status === 'success'){
                  console.log(res);
                  console.log('Estado actualizado');
                  }
                  else{
                    console.log('Erro actualizando el estado del pedido');
                  }
                },
                (err) => {
                  console.log(err);
                }
              );
          }
          if (this.order.status == 'delivered') {
            this.estadoOk = true;
            this.estadoKo = false;
            this.columnsToDisplay = [
              'description',
              'amount',
              'pasillo',
              'estante',
            ];
          } else {
            this.estadoKo = true;
          }
          this.loading = false;
        }
        else {
          console.log(res);
          this.loading = false;
        }
      },
      (err) => {
        console.log(err);
        this.loading = false;
      }
    );
  }
  checkValue(event: any) {
    console.log(event);
  }
  funcCheck(e: any) {
    if (e.target.checked) {
      this.num_checks = this.num_checks + 1;
      console.log(this.num_checks);
    } else {
      this.num_checks = this.num_checks - 1;
      console.log(this.num_checks);
    }
  }

  visualizarProducto() {
    this.router.navigate(['/pickingOrders']);
  }
  updateProducto() {
    if (this.num_checks == this.order.products.length) {
      this.errorUpdate = false;
      this.loading = true;
      this.order.status = 'delivered';
      console.log(this.order);
      this._ordersService.updateOrder(this.order, this.order.id).subscribe(
        (res) => {
          console.log(res);
          this.router.navigate(['/worker/pickingOrders']);
        },
        (err) => {
          console.log(err);
        }
      );
    } else {
      this.errorUpdate = true;
    }
  }
}
