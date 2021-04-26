import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ProductWorker } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-worker',
  templateUrl: './product-worker.component.html',
  styleUrls: ['./product-worker.component.scss'],
})
export class ProductWorkerComponent implements OnInit, AfterViewInit {
  loading: boolean = true;
  dataSource = new MatTableDataSource();
  displayedColumns: any;
  pageSize: number = 5;
  length: number = 0;
  pageSizeOptions = [5, 10, 15, 20, 50, 100];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  products: ProductWorker[] = [];

  constructor(private _productsService: ProductService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getProducts() {
    this._productsService.getProductos().subscribe(
      (res) => {
        if (res.status == 'success') {
          console.log('Products retrieved', res);
          this.products = res.products;
          console.log(this.products);
          this.dataSource.data = this.products;
          this.loading = false;
          this.displayedColumns = [
            'reference',
            'location',
            'provider',
            'picking',
            'stock'
          ];
          this.length=this.products.length;
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
