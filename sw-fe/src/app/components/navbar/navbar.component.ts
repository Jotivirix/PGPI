import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  title: any = '';

  productosCarrito:any;
  itemsCarrito:Number;

  constructor() {
    this.itemsCarrito = 0;
    this.title = 'Smart Warehouse';
    console.log('Navbar Cargada');
  }

  ngOnInit(): void {
    this.productosCarrito = JSON.parse(localStorage.getItem('carrito')!);
    this.itemsCarrito = this.productosCarrito.length;
  }

}
