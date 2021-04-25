import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ThemePalette } from '@angular/material/core';
import { filter } from 'lodash';

@Component({
  selector: 'picking-orders',
  templateUrl: './picking-orders.component.html',
  styleUrls: ['./picking-orders.component.scss'],
})
export class PickingOrdersComponent implements OnInit, AfterViewInit {
  loading: boolean = false;
  dataSource = new MatTableDataSource();
  columnsToDisplay = [
    'orderID',
    'client',
    'date',
    'status',
    'address',
    'deliverType',
    'prepare',
  ];
  pageSize: number = 5;
  length: number = 0;
  pageSizeOptions = [5, 10, 15, 20, 50, 100];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  orders: any = [];
  showPrepareButton: boolean = true;

  links = ['First', 'Second', 'Third'];
  activeLink = this.links[0];
  background: ThemePalette = 'primary';

  constructor(private _ordersService: OrderService) {}

  ngOnInit(): void {
    this.getOrders();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getOrders() {
    this.loading = true;
    this._ordersService.getOrders().subscribe(
      (res) => {
        if (res.status == 'success') {
          this.loading = false;
          this.orders = res.orders;
          this.length = this.orders.length;
          this.dataSource.data = this.orders;
        } else {
          console.log(res);
        }
        return this.orders;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  showPending() {
    console.log('Pending');
    const filteredOrders = this.orders.filter(
      (order: any) => order.status === 'pending'
    );
    this.dataSource.data = filteredOrders;
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.length = this.dataSource.data.length;
  }

  showInProgress() {
    console.log('In Progress');
    const filteredOrders = this.orders.filter(
      (order: any) => order.status === 'in progress'
    );
    this.dataSource.data = filteredOrders;
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.length = this.dataSource.data.length;
  }

  showDelivered() {
    console.log('Delivered');
    const filteredOrders = this.orders.filter(
      (order: any) => order.status === 'completed'
    );
    this.dataSource.data = filteredOrders;
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.length = this.dataSource.data.length;
  }
}
