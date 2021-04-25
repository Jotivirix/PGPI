import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTabsModule } from '@angular/material/tabs';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'picking-orders',
  templateUrl: './picking-orders.component.html',
  styleUrls: ['./picking-orders.component.scss'],
})
export class PickingOrdersComponent implements OnInit, AfterViewInit {
  loading: boolean = true;
  dataSource = new MatTableDataSource();
  columnsToDisplay: any;
  pageSize: number = 5;
  length: number = 0;
  pageSizeOptions = [5, 10, 15, 20, 50, 100];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  expandedElement: any | null | undefined;
  orders:any;


  links = ['First', 'Second', 'Third'];
  activeLink = this.links[0];
  background: ThemePalette = 'primary';

  constructor(private _ordersService: OrderService) { }

  ngOnInit(): void {
    this.getOrders();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getOrders() {
    this._ordersService.getOrders().subscribe(res => {
      if(res.status == "success"){
        this.orders = res.orders;
        console.log(this.orders);
        console.log('Products retrieved', res);
          this.orders = res.orders;
          this.dataSource.data = this.orders;
          this.loading = false;
          this.columnsToDisplay = [
            'orderID',
            'client',
            'date',
            'status',
            'address',
            'deliverType',
            'prepare'
          ];
          this.length=this.orders.length;
      }
      else{

      }
    }, err => {
      console.log(err);
    })
  }

}

