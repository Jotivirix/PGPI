import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  productos = [
    {
      "reference": "X11",
      "description": "Leche fresca",
      "stock": 20,
      "picking": 20,
      "warning_stock": 3,
      "image": "",
      "provider_id": 1,
      "location_id": "A"
    },
    {
      "reference": "X12",
      "description": "Platanos canarios",
      "stock": 20,
      "picking": 20,
      "warning_stock": 9,
      "image": "",
      "provider_id": 2,
      "location_id": "B"
    },
    {
      "reference": "X13",
      "description": "Platanos de Albacete",
      "stock": 20,
      "picking": 20,
      "warning_stock": 2,
      "image": "",
      "provider_id": 3,
      "location_id": "C"
    },
    {
      "reference": "X14",
      "description": "Leche semidesnatada",
      "stock": 20,
      "picking": 20,
      "warning_stock": 8,
      "image": "",
      "provider_id": 3,
      "location_id": "D"
    },
    {
      "reference": "X15",
      "description": "Fresón",
      "stock": 20,
      "picking": 20,
      "warning_stock": 2,
      "image": "",
      "provider_id": 2,
      "location_id": "E"
    },
    {
      "reference": "X16",
      "description": "Yogur desnatado",
      "stock": 20,
      "picking": 20,
      "warning_stock": 10,
      "image": "",
      "provider_id": 1,
      "location_id": "F"
    },
    {
      "reference": "X17",
      "description": "Agua Mineral",
      "stock": 20,
      "picking": 20,
      "warning_stock": 7,
      "image": "",
      "provider_id": 4,
      "location_id": "G"
    },
    {
      "reference": "X18",
      "description": "Coca Cola Original",
      "stock": 20,
      "picking": 20,
      "warning_stock": 15,
      "image": "",
      "provider_id": 4,
      "location_id": "H"
    },
    {
      "reference": "X19",
      "description": "Ron Barceló",
      "stock": 20,
      "picking": 20,
      "warning_stock": 12,
      "image": "",
      "provider_id": 4,
      "location_id": "I"
    },
    {
      "reference": "X20",
      "description": "Red Bull Sin Azúcar",
      "stock": 20,
      "picking": 20,
      "warning_stock": 6,
      "image": "",
      "provider_id": 2,
      "location_id": "J"
    },
    {
      "reference": "X21",
      "description": "Mandarinas",
      "stock": 20,
      "picking": 20,
      "warning_stock": 3,
      "image": "",
      "provider_id": 1,
      "location_id": "K"
    },
    {
      "reference": "X22",
      "description": "Jamón Serrano",
      "stock": 20,
      "picking": 20,
      "warning_stock": 2,
      "image": "",
      "provider_id": 1,
      "location_id": "L"
    },
    {
      "reference": "X23",
      "description": "Pepino",
      "stock": 20,
      "picking": 20,
      "warning_stock": 5,
      "image": "",
      "provider_id": 1,
      "location_id": "M"
    },
    {
      "reference": "X24",
      "description": "Chocolate Nestlé",
      "stock": 20,
      "picking": 20,
      "warning_stock": 9,
      "image": "",
      "provider_id": 3,
      "location_id": "N"
    },
    {
      "reference": "X25",
      "description": "Filetes de Merluza",
      "stock": 20,
      "picking": 20,
      "warning_stock": 4,
      "image": "",
      "provider_id": 3,
      "location_id": "O"
    },
    {
      "reference": "X26",
      "description": "Cerveza",
      "stock": 20,
      "picking": 20,
      "warning_stock": 5,
      "image": "",
      "provider_id": 1,
      "location_id": "P"
    },
    {
      "reference": "X27",
      "description": "Fanta Naranja",
      "stock": 20,
      "picking": 20,
      "warning_stock": 8,
      "image": "",
      "provider_id": 2,
      "location_id": "Q"
    },
    {
      "reference": "X28",
      "description": "Detergente Ariel",
      "stock": 20,
      "picking": 20,
      "warning_stock": 2,
      "image": "",
      "provider_id": 4,
      "location_id": "R"
    },
    {
      "reference": "X29",
      "description": "Barrita Energética Chocolate",
      "stock": 20,
      "picking": 20,
      "warning_stock": 3,
      "image": "",
      "provider_id": 1,
      "location_id": "S"
    },
    {
      "reference": "X30",
      "description": "Lejía Perfumada",
      "stock": 20,
      "picking": 20,
      "warning_stock": 4,
      "image": "",
      "provider_id": 1,
      "location_id": "T"
    },
    {
      "reference": "X11",
      "description": "Leche fresca",
      "stock": 20,
      "picking": 20,
      "warning_stock": 3,
      "image": "",
      "provider_id": 1,
      "location_id": "A"
    },
    {
      "reference": "X12",
      "description": "Platanos canarios",
      "stock": 20,
      "picking": 20,
      "warning_stock": 9,
      "image": "",
      "provider_id": 2,
      "location_id": "B"
    },
    {
      "reference": "X13",
      "description": "Platanos de Albacete",
      "stock": 20,
      "picking": 20,
      "warning_stock": 2,
      "image": "",
      "provider_id": 3,
      "location_id": "C"
    },
    {
      "reference": "X14",
      "description": "Leche semidesnatada",
      "stock": 20,
      "picking": 20,
      "warning_stock": 8,
      "image": "",
      "provider_id": 3,
      "location_id": "D"
    },
    {
      "reference": "X15",
      "description": "Fresón",
      "stock": 20,
      "picking": 20,
      "warning_stock": 2,
      "image": "",
      "provider_id": 2,
      "location_id": "E"
    },
    {
      "reference": "X16",
      "description": "Yogur desnatado",
      "stock": 20,
      "picking": 20,
      "warning_stock": 10,
      "image": "",
      "provider_id": 1,
      "location_id": "F"
    },
    {
      "reference": "X17",
      "description": "Agua Mineral",
      "stock": 20,
      "picking": 20,
      "warning_stock": 7,
      "image": "",
      "provider_id": 4,
      "location_id": "G"
    },
    {
      "reference": "X18",
      "description": "Coca Cola Original",
      "stock": 20,
      "picking": 20,
      "warning_stock": 15,
      "image": "",
      "provider_id": 4,
      "location_id": "H"
    },
    {
      "reference": "X19",
      "description": "Ron Barceló",
      "stock": 20,
      "picking": 20,
      "warning_stock": 12,
      "image": "",
      "provider_id": 4,
      "location_id": "I"
    },
    {
      "reference": "X20",
      "description": "Red Bull Sin Azúcar",
      "stock": 20,
      "picking": 20,
      "warning_stock": 6,
      "image": "",
      "provider_id": 2,
      "location_id": "J"
    },
    {
      "reference": "X21",
      "description": "Mandarinas",
      "stock": 20,
      "picking": 20,
      "warning_stock": 3,
      "image": "",
      "provider_id": 1,
      "location_id": "K"
    },
    {
      "reference": "X22",
      "description": "Jamón Serrano",
      "stock": 20,
      "picking": 20,
      "warning_stock": 2,
      "image": "",
      "provider_id": 1,
      "location_id": "L"
    },
    {
      "reference": "X23",
      "description": "Pepino",
      "stock": 20,
      "picking": 20,
      "warning_stock": 5,
      "image": "",
      "provider_id": 1,
      "location_id": "M"
    },
    {
      "reference": "X24",
      "description": "Chocolate Nestlé",
      "stock": 20,
      "picking": 20,
      "warning_stock": 9,
      "image": "",
      "provider_id": 3,
      "location_id": "N"
    },
    {
      "reference": "X25",
      "description": "Filetes de Merluza",
      "stock": 20,
      "picking": 20,
      "warning_stock": 4,
      "image": "",
      "provider_id": 3,
      "location_id": "O"
    },
    {
      "reference": "X26",
      "description": "Cerveza",
      "stock": 20,
      "picking": 20,
      "warning_stock": 5,
      "image": "",
      "provider_id": 1,
      "location_id": "P"
    },
    {
      "reference": "X27",
      "description": "Fanta Naranja",
      "stock": 20,
      "picking": 20,
      "warning_stock": 8,
      "image": "",
      "provider_id": 2,
      "location_id": "Q"
    },
    {
      "reference": "X28",
      "description": "Detergente Ariel",
      "stock": 20,
      "picking": 20,
      "warning_stock": 2,
      "image": "",
      "provider_id": 4,
      "location_id": "R"
    },
    {
      "reference": "X29",
      "description": "Barrita Energética Chocolate",
      "stock": 20,
      "picking": 20,
      "warning_stock": 3,
      "image": "",
      "provider_id": 1,
      "location_id": "S"
    },
    {
      "reference": "X30",
      "description": "Lejía Perfumada",
      "stock": 20,
      "picking": 20,
      "warning_stock": 4,
      "image": "",
      "provider_id": 1,
      "location_id": "T"
    },
    {
      "reference": "X11",
      "description": "Leche fresca",
      "stock": 20,
      "picking": 20,
      "warning_stock": 3,
      "image": "",
      "provider_id": 1,
      "location_id": "A"
    },
    {
      "reference": "X12",
      "description": "Platanos canarios",
      "stock": 20,
      "picking": 20,
      "warning_stock": 9,
      "image": "",
      "provider_id": 2,
      "location_id": "B"
    },
    {
      "reference": "X13",
      "description": "Platanos de Albacete",
      "stock": 20,
      "picking": 20,
      "warning_stock": 2,
      "image": "",
      "provider_id": 3,
      "location_id": "C"
    },
    {
      "reference": "X14",
      "description": "Leche semidesnatada",
      "stock": 20,
      "picking": 20,
      "warning_stock": 8,
      "image": "",
      "provider_id": 3,
      "location_id": "D"
    },
    {
      "reference": "X15",
      "description": "Fresón",
      "stock": 20,
      "picking": 20,
      "warning_stock": 2,
      "image": "",
      "provider_id": 2,
      "location_id": "E"
    },
    {
      "reference": "X16",
      "description": "Yogur desnatado",
      "stock": 20,
      "picking": 20,
      "warning_stock": 10,
      "image": "",
      "provider_id": 1,
      "location_id": "F"
    },
    {
      "reference": "X17",
      "description": "Agua Mineral",
      "stock": 20,
      "picking": 20,
      "warning_stock": 7,
      "image": "",
      "provider_id": 4,
      "location_id": "G"
    },
    {
      "reference": "X18",
      "description": "Coca Cola Original",
      "stock": 20,
      "picking": 20,
      "warning_stock": 15,
      "image": "",
      "provider_id": 4,
      "location_id": "H"
    },
    {
      "reference": "X19",
      "description": "Ron Barceló",
      "stock": 20,
      "picking": 20,
      "warning_stock": 12,
      "image": "",
      "provider_id": 4,
      "location_id": "I"
    },
    {
      "reference": "X20",
      "description": "Red Bull Sin Azúcar",
      "stock": 20,
      "picking": 20,
      "warning_stock": 6,
      "image": "",
      "provider_id": 2,
      "location_id": "J"
    },
    {
      "reference": "X21",
      "description": "Mandarinas",
      "stock": 20,
      "picking": 20,
      "warning_stock": 3,
      "image": "",
      "provider_id": 1,
      "location_id": "K"
    },
    {
      "reference": "X22",
      "description": "Jamón Serrano",
      "stock": 20,
      "picking": 20,
      "warning_stock": 2,
      "image": "",
      "provider_id": 1,
      "location_id": "L"
    },
    {
      "reference": "X23",
      "description": "Pepino",
      "stock": 20,
      "picking": 20,
      "warning_stock": 5,
      "image": "",
      "provider_id": 1,
      "location_id": "M"
    },
    {
      "reference": "X24",
      "description": "Chocolate Nestlé",
      "stock": 20,
      "picking": 20,
      "warning_stock": 9,
      "image": "",
      "provider_id": 3,
      "location_id": "N"
    },
    {
      "reference": "X25",
      "description": "Filetes de Merluza",
      "stock": 20,
      "picking": 20,
      "warning_stock": 4,
      "image": "",
      "provider_id": 3,
      "location_id": "O"
    },
    {
      "reference": "X26",
      "description": "Cerveza",
      "stock": 20,
      "picking": 20,
      "warning_stock": 5,
      "image": "",
      "provider_id": 1,
      "location_id": "P"
    },
    {
      "reference": "X27",
      "description": "Fanta Naranja",
      "stock": 20,
      "picking": 20,
      "warning_stock": 8,
      "image": "",
      "provider_id": 2,
      "location_id": "Q"
    },
    {
      "reference": "X28",
      "description": "Detergente Ariel",
      "stock": 20,
      "picking": 20,
      "warning_stock": 2,
      "image": "",
      "provider_id": 4,
      "location_id": "R"
    },
    {
      "reference": "X29",
      "description": "Barrita Energética Chocolate",
      "stock": 20,
      "picking": 20,
      "warning_stock": 3,
      "image": "",
      "provider_id": 1,
      "location_id": "S"
    },
    {
      "reference": "X30",
      "description": "Lejía Perfumada",
      "stock": 20,
      "picking": 20,
      "warning_stock": 4,
      "image": "",
      "provider_id": 1,
      "location_id": "T"
    },
    {
      "reference": "X11",
      "description": "Leche fresca",
      "stock": 20,
      "picking": 20,
      "warning_stock": 3,
      "image": "",
      "provider_id": 1,
      "location_id": "A"
    },
    {
      "reference": "X12",
      "description": "Platanos canarios",
      "stock": 20,
      "picking": 20,
      "warning_stock": 9,
      "image": "",
      "provider_id": 2,
      "location_id": "B"
    },
    {
      "reference": "X13",
      "description": "Platanos de Albacete",
      "stock": 20,
      "picking": 20,
      "warning_stock": 2,
      "image": "",
      "provider_id": 3,
      "location_id": "C"
    },
    {
      "reference": "X14",
      "description": "Leche semidesnatada",
      "stock": 20,
      "picking": 20,
      "warning_stock": 8,
      "image": "",
      "provider_id": 3,
      "location_id": "D"
    },
    {
      "reference": "X15",
      "description": "Fresón",
      "stock": 20,
      "picking": 20,
      "warning_stock": 2,
      "image": "",
      "provider_id": 2,
      "location_id": "E"
    },
    {
      "reference": "X16",
      "description": "Yogur desnatado",
      "stock": 20,
      "picking": 20,
      "warning_stock": 10,
      "image": "",
      "provider_id": 1,
      "location_id": "F"
    },
    {
      "reference": "X17",
      "description": "Agua Mineral",
      "stock": 20,
      "picking": 20,
      "warning_stock": 7,
      "image": "",
      "provider_id": 4,
      "location_id": "G"
    },
    {
      "reference": "X18",
      "description": "Coca Cola Original",
      "stock": 20,
      "picking": 20,
      "warning_stock": 15,
      "image": "",
      "provider_id": 4,
      "location_id": "H"
    },
    {
      "reference": "X19",
      "description": "Ron Barceló",
      "stock": 20,
      "picking": 20,
      "warning_stock": 12,
      "image": "",
      "provider_id": 4,
      "location_id": "I"
    },
    {
      "reference": "X20",
      "description": "Red Bull Sin Azúcar",
      "stock": 20,
      "picking": 20,
      "warning_stock": 6,
      "image": "",
      "provider_id": 2,
      "location_id": "J"
    },
    {
      "reference": "X21",
      "description": "Mandarinas",
      "stock": 20,
      "picking": 20,
      "warning_stock": 3,
      "image": "",
      "provider_id": 1,
      "location_id": "K"
    },
    {
      "reference": "X22",
      "description": "Jamón Serrano",
      "stock": 20,
      "picking": 20,
      "warning_stock": 2,
      "image": "",
      "provider_id": 1,
      "location_id": "L"
    },
    {
      "reference": "X23",
      "description": "Pepino",
      "stock": 20,
      "picking": 20,
      "warning_stock": 5,
      "image": "",
      "provider_id": 1,
      "location_id": "M"
    },
    {
      "reference": "X24",
      "description": "Chocolate Nestlé",
      "stock": 20,
      "picking": 20,
      "warning_stock": 9,
      "image": "",
      "provider_id": 3,
      "location_id": "N"
    },
    {
      "reference": "X25",
      "description": "Filetes de Merluza",
      "stock": 20,
      "picking": 20,
      "warning_stock": 4,
      "image": "",
      "provider_id": 3,
      "location_id": "O"
    },
    {
      "reference": "X26",
      "description": "Cerveza",
      "stock": 20,
      "picking": 20,
      "warning_stock": 5,
      "image": "",
      "provider_id": 1,
      "location_id": "P"
    },
    {
      "reference": "X27",
      "description": "Fanta Naranja",
      "stock": 20,
      "picking": 20,
      "warning_stock": 8,
      "image": "",
      "provider_id": 2,
      "location_id": "Q"
    },
    {
      "reference": "X28",
      "description": "Detergente Ariel",
      "stock": 20,
      "picking": 20,
      "warning_stock": 2,
      "image": "",
      "provider_id": 4,
      "location_id": "R"
    },
    {
      "reference": "X29",
      "description": "Barrita Energética Chocolate",
      "stock": 20,
      "picking": 20,
      "warning_stock": 3,
      "image": "",
      "provider_id": 1,
      "location_id": "S"
    },
    {
      "reference": "X30",
      "description": "Lejía Perfumada",
      "stock": 20,
      "picking": 20,
      "warning_stock": 4,
      "image": "",
      "provider_id": 1,
      "location_id": "T"
    },
    {
      "reference": "X11",
      "description": "Leche fresca",
      "stock": 20,
      "picking": 20,
      "warning_stock": 3,
      "image": "",
      "provider_id": 1,
      "location_id": "A"
    },
    {
      "reference": "X12",
      "description": "Platanos canarios",
      "stock": 20,
      "picking": 20,
      "warning_stock": 9,
      "image": "",
      "provider_id": 2,
      "location_id": "B"
    },
    {
      "reference": "X13",
      "description": "Platanos de Albacete",
      "stock": 20,
      "picking": 20,
      "warning_stock": 2,
      "image": "",
      "provider_id": 3,
      "location_id": "C"
    },
    {
      "reference": "X14",
      "description": "Leche semidesnatada",
      "stock": 20,
      "picking": 20,
      "warning_stock": 8,
      "image": "",
      "provider_id": 3,
      "location_id": "D"
    },
    {
      "reference": "X15",
      "description": "Fresón",
      "stock": 20,
      "picking": 20,
      "warning_stock": 2,
      "image": "",
      "provider_id": 2,
      "location_id": "E"
    },
    {
      "reference": "X16",
      "description": "Yogur desnatado",
      "stock": 20,
      "picking": 20,
      "warning_stock": 10,
      "image": "",
      "provider_id": 1,
      "location_id": "F"
    },
    {
      "reference": "X17",
      "description": "Agua Mineral",
      "stock": 20,
      "picking": 20,
      "warning_stock": 7,
      "image": "",
      "provider_id": 4,
      "location_id": "G"
    },
    {
      "reference": "X18",
      "description": "Coca Cola Original",
      "stock": 20,
      "picking": 20,
      "warning_stock": 15,
      "image": "",
      "provider_id": 4,
      "location_id": "H"
    },
    {
      "reference": "X19",
      "description": "Ron Barceló",
      "stock": 20,
      "picking": 20,
      "warning_stock": 12,
      "image": "",
      "provider_id": 4,
      "location_id": "I"
    },
    {
      "reference": "X20",
      "description": "Red Bull Sin Azúcar",
      "stock": 20,
      "picking": 20,
      "warning_stock": 6,
      "image": "",
      "provider_id": 2,
      "location_id": "J"
    },
    {
      "reference": "X21",
      "description": "Mandarinas",
      "stock": 20,
      "picking": 20,
      "warning_stock": 3,
      "image": "",
      "provider_id": 1,
      "location_id": "K"
    },
    {
      "reference": "X22",
      "description": "Jamón Serrano",
      "stock": 20,
      "picking": 20,
      "warning_stock": 2,
      "image": "",
      "provider_id": 1,
      "location_id": "L"
    },
    {
      "reference": "X23",
      "description": "Pepino",
      "stock": 20,
      "picking": 20,
      "warning_stock": 5,
      "image": "",
      "provider_id": 1,
      "location_id": "M"
    },
    {
      "reference": "X24",
      "description": "Chocolate Nestlé",
      "stock": 20,
      "picking": 20,
      "warning_stock": 9,
      "image": "",
      "provider_id": 3,
      "location_id": "N"
    },
    {
      "reference": "X25",
      "description": "Filetes de Merluza",
      "stock": 20,
      "picking": 20,
      "warning_stock": 4,
      "image": "",
      "provider_id": 3,
      "location_id": "O"
    },
    {
      "reference": "X26",
      "description": "Cerveza",
      "stock": 20,
      "picking": 20,
      "warning_stock": 5,
      "image": "",
      "provider_id": 1,
      "location_id": "P"
    },
    {
      "reference": "X27",
      "description": "Fanta Naranja",
      "stock": 20,
      "picking": 20,
      "warning_stock": 8,
      "image": "",
      "provider_id": 2,
      "location_id": "Q"
    },
    {
      "reference": "X28",
      "description": "Detergente Ariel",
      "stock": 20,
      "picking": 20,
      "warning_stock": 2,
      "image": "",
      "provider_id": 4,
      "location_id": "R"
    },
    {
      "reference": "X29",
      "description": "Barrita Energética Chocolate",
      "stock": 20,
      "picking": 20,
      "warning_stock": 3,
      "image": "",
      "provider_id": 1,
      "location_id": "S"
    },
    {
      "reference": "X30",
      "description": "Lejía Perfumada",
      "stock": 20,
      "picking": 20,
      "warning_stock": 4,
      "image": "",
      "provider_id": 1,
      "location_id": "T"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
