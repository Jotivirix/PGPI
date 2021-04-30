import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from 'src/app/services/order.service';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.scss'],
})
export class OrderPageComponent implements OnInit, AfterViewInit {
  loading: boolean = false;
  dataSource = new MatTableDataSource();
  columnsToDisplay = ['description', 'amount'];
  pageSize: number = 5;
  length: number = 0;
  orderToRequest: number = 0;
  pageSizeOptions = [5, 10, 15, 20, 50, 100];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  order: any;
  orderProducts: any = [];
  address: string = '';
  client: any;
  disabledButtons = false;
  loadingTag = false;

  constructor(
    private _ordersService: OrderService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.orderToRequest = params['id'];
    });
    this.getOrders();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  async getOrders() {
    this.loading = true;
    await this._ordersService.getOrderById(this.orderToRequest).subscribe(
      (res) => {
        if (res.status == 'success') {
          this.order = res.order;
          this.order.order_id = res.order.id;
          this.orderProducts = res.order.products;
          this.dataSource.data = this.orderProducts;
          this.client = this.order.user.name + ' ' + this.order.user.surname;
          this.address =
            this.order.street +
            ' ' +
            this.order.number +
            ', ' +
            this.order.zip_code +
            ' ' +
            this.order.city +
            ', ' +
            this.order.country;
          this.loading = false;
        } else {
        }
      },
      (err) => {
      }
    );
  }

  generateTag() {
    this.loadingTag = true;
    this.disabledButtons = true;
    this._ordersService.generateTag(this.order).subscribe(
      (res) => {
        var mediaType = 'application/pdf';
        var blob = new Blob([res], { type: mediaType });
        saveAs(blob, 'Etiqueta_Envío_Pedido_' + this.order.id + '.pdf');
        this.loadingTag = false;
        this.disabledButtons = false;
      },
      (error) => {
      }
    );
  }

  generateDeliveryNote() {
    this.loadingTag = true;
    this.disabledButtons = true;
    this._ordersService.generateDeliveryNote(this.order).subscribe(
      (res) => {
        var mediaType = 'application/pdf';
        var blob = new Blob([res], { type: mediaType });
        saveAs(blob, 'Albarán_Pedido_' + this.order.id + '.pdf');
        this.loadingTag = false;
        this.disabledButtons = false;
      },
      (error) => {
      }
    );
  }
}
