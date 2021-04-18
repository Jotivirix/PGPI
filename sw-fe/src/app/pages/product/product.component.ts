import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/interfaces/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {

  productos: Product[] = [
    {
      reference: 'X11',
      description: 'Leche fresca',
      stock: 20,
      picking: 20,
      warning_stock: 3,
      image: '',
      provider_id: 1,
      location_id: 'A',
      precio: 2
    },
    {
      reference: 'X12',
      description: 'Platanos canarios',
      stock: 20,
      picking: 20,
      warning_stock: 9,
      image: '',
      provider_id: 2,
      location_id: 'B',
      precio: 2
    },
    {
      reference: 'X13',
      description: 'Platanos de Albacete',
      stock: 20,
      picking: 20,
      warning_stock: 2,
      image: '',
      provider_id: 3,
      location_id: 'C',
      precio: 2
    },
    {
      reference: 'X14',
      description: 'Leche semidesnatada',
      stock: 20,
      picking: 20,
      warning_stock: 8,
      image: '',
      provider_id: 3,
      location_id: 'D',
      precio: 2
    },
    {
      reference: 'X15',
      description: 'Fresón',
      stock: 20,
      picking: 20,
      warning_stock: 2,
      image: '',
      provider_id: 2,
      location_id: 'E',
      precio: 2
    },
    {
      reference: 'X16',
      description: 'Yogur desnatado',
      stock: 20,
      picking: 20,
      warning_stock: 10,
      image: '',
      provider_id: 1,
      location_id: 'F',
      precio: 2
    },
    {
      reference: 'X17',
      description: 'Agua Mineral',
      stock: 20,
      picking: 20,
      warning_stock: 7,
      image: '',
      provider_id: 4,
      location_id: 'G',
      precio: 2
    },
    {
      reference: 'X18',
      description: 'Coca Cola Original',
      stock: 20,
      picking: 20,
      warning_stock: 15,
      image: '',
      provider_id: 4,
      location_id: 'H',
      precio: 2
    },
    {
      reference: 'X19',
      description: 'Ron Barceló',
      stock: 20,
      picking: 20,
      warning_stock: 12,
      image: '',
      provider_id: 4,
      location_id: 'I',
      precio: 2
    },
    {
      reference: 'X20',
      description: 'Red Bull Sin Azúcar',
      stock: 20,
      picking: 20,
      warning_stock: 6,
      image: '',
      provider_id: 2,
      location_id: 'J',
      precio: 2
    },
    {
      reference: 'X21',
      description: 'Mandarinas',
      stock: 20,
      picking: 20,
      warning_stock: 3,
      image: '',
      provider_id: 1,
      location_id: 'K',
      precio: 2
    },
    {
      reference: 'X22',
      description: 'Jamón Serrano',
      stock: 20,
      picking: 20,
      warning_stock: 2,
      image: '',
      provider_id: 1,
      location_id: 'L',
      precio: 2
    },
    {
      reference: 'X23',
      description: 'Pepino',
      stock: 20,
      picking: 20,
      warning_stock: 5,
      image: '',
      provider_id: 1,
      location_id: 'M',
      precio: 2
    },
    {
      reference: 'X24',
      description: 'Chocolate Nestlé',
      stock: 20,
      picking: 20,
      warning_stock: 9,
      image: '',
      provider_id: 3,
      location_id: 'N',
      precio: 2
    },
    {
      reference: 'X25',
      description: 'Filetes de Merluza',
      stock: 20,
      picking: 20,
      warning_stock: 4,
      image: '',
      provider_id: 3,
      location_id: 'O',
      precio: 2
    },
    {
      reference: 'X26',
      description: 'Cerveza',
      stock: 20,
      picking: 20,
      warning_stock: 5,
      image: '',
      provider_id: 1,
      location_id: 'P',
      precio: 2
    },
    {
      reference: 'X27',
      description: 'Fanta Naranja',
      stock: 20,
      picking: 20,
      warning_stock: 8,
      image: '',
      provider_id: 2,
      location_id: 'Q',
      precio: 2
    },
    {
      reference: 'X28',
      description: 'Detergente Ariel',
      stock: 20,
      picking: 20,
      warning_stock: 2,
      image: '',
      provider_id: 4,
      location_id: 'R',
      precio: 2
    },
    {
      reference: 'X29',
      description: 'Barrita Energética Chocolate',
      stock: 20,
      picking: 20,
      warning_stock: 3,
      image: '',
      provider_id: 1,
      location_id: 'S',
      precio: 2
    },
    {
      reference: 'X30',
      description: 'Lejía Perfumada',
      stock: 20,
      picking: 20,
      warning_stock: 4,
      image: '',
      provider_id: 1,
      location_id: 'T',
      precio: 2
    },
  ];

  producto: Product = {
    reference: '',
    description: '',
    stock: 0,
    picking: 0,
    warning_stock: 0,
    image: '',
    provider_id: 0,
    location_id: '',
    precio: 2
  };

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      console.log(params); //log the entire params object
      console.log(params['id']); //log the value of id
      console.log(params['proveedor']); //log the value of id

      this.producto = this.productos.filter((val) => val.reference == params['id'] && val.provider_id == params['proveedor'])[0];

      console.log(this.producto);
    });
  }

  //function to return list of numbers from 0 to n-1
  numSequence(n: number): Array<number> {
    return Array(n);
  }

}
