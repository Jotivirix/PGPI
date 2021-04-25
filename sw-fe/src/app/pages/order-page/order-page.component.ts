import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.scss']
})
export class OrderPageComponent implements OnInit, AfterViewInit {
  loading: boolean = false;
  dataSource = new MatTableDataSource();
  columnsToDisplay = [
    'description',
    'amount'
  ];
  pageSize: number = 5;
  length: number = 0;
  orderToRequest:number = 0;
  pageSizeOptions = [5, 10, 15, 20, 50, 100];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  order:any;
  orderProducts: any = [];
  address:string = '';
  client:any;

  constructor(private _ordersService: OrderService,
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      console.log(params); //log the entire params object
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
          console.log(res)
          this.order = res.order;
          this.orderProducts = res.order.products;
          this.dataSource.data = this.orderProducts;
          this.client = this.order.user_id;
          this.address = this.order.street + ' ' + this.order.number + ', ' + this.order.zip_code + ' ' + this.order.city + ', ' + this.order.country;
          console.log(this.client);
          console.log(this.address);
          this.loading = false;
        } else {
          console.log(res);
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }

}
