import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  p: number = 1;

  collection: any[] = [
    {
      "producto_id": "001",
      "referencia": "X00101",
      "descripcion": "Leche fresca",
      "proveedor_id": "01"
    },
    {
      "producto_id": "002",
      "referencia": "X00201",
      "descripcion": "Platanos canarios",
      "proveedor_id": "01"
    },
    {
      "producto_id": "003",
      "referencia": "X00301",
      "descripcion": "Fresisui",
      "proveedor_id": "01"
    },
    {
      "producto_id": "004",
      "referencia": "X00401",
      "descripcion": "Palmeras de chocolate",
      "proveedor_id": "01"
    },
    {
      "producto_id": "005",
      "referencia": "X00501",
      "descripcion": "Macarrones",
      "proveedor_id": "01"
    },
    {
      "producto_id": "006",
      "referencia": "X00601",
      "descripcion": "Atun",
      "proveedor_id": "01",

    },
    {
      "producto_id": "007",
      "referencia": "X00701",
      "descripcion": "Maiz",
      "proveedor_id": "01",

    },
    {
      "producto_id": "008",
      "referencia": "X00801",
      "descripcion": "Patatas de bolsa",
      "proveedor_id": "01",

    },
    {
      "producto_id": "009",
      "referencia": "X00901",
      "descripcion": "Mandarinas",
      "proveedor_id": "01",

    },
    {
      "producto_id": "010",
      "referencia": "X01001",
      "descripcion": "Torreznos",
      "proveedor_id": "01",

    },
    {
      "producto_id": "011",
      "referencia": "X01102",
      "descripcion": "Leche fresca",
      "proveedor_id": "02",

    },
    {
      "producto_id": "012",
      "referencia": "X01202",
      "descripcion": "Platanos canarios",
      "proveedor_id": "02",

    },
    {
      "producto_id": "013",
      "referencia": "X01302",
      "descripcion": "Fresisui",
      "proveedor_id": "02",

    },
    {
      "producto_id": "014",
      "referencia": "X01402",
      "descripcion": "Palmeras de chocolate",
      "proveedor_id": "02",

    },
    {
      "producto_id": "015",
      "referencia": "X01502",
      "descripcion": "Macarrones",
      "proveedor_id": "02",

    },
    {
      "producto_id": "016",
      "referencia": "X01602",
      "descripcion": "Atun",
      "proveedor_id": "02",

    },
    {
      "producto_id": "017",
      "referencia": "X01702",
      "descripcion": "Maiz",
      "proveedor_id": "02",

    },
    {
      "producto_id": "018",
      "referencia": "X01802",
      "descripcion": "Patatas de bolsa",
      "proveedor_id": "02",

    },
    {
      "producto_id": "019",
      "referencia": "X01902",
      "descripcion": "Mandarinas",
      "proveedor_id": "02",

    },
    {
      "producto_id": "020",
      "referencia": "X02002",
      "descripcion": "Torreznos",
      "proveedor_id": "02",

    },
    {
      "producto_id": "021",
      "referencia": "X02103",
      "descripcion": "Leche fresca",
      "proveedor_id": "03",

    },
    {
      "producto_id": "022",
      "referencia": "X02203",
      "descripcion": "Platanos canarios",
      "proveedor_id": "03",

    },
    {
      "producto_id": "023",
      "referencia": "X02303",
      "descripcion": "Fresisui",
      "proveedor_id": "03",

    },
    {
      "producto_id": "024",
      "referencia": "X02403",
      "descripcion": "Palmeras de chocolate",
      "proveedor_id": "03",

    },
  ]

  productos = [
    {
      "producto_id": "001",
      "referencia": "X00101",
      "descripcion": "Leche fresca",
      "proveedor_id": "01"
    },
    {
      "producto_id": "002",
      "referencia": "X00201",
      "descripcion": "Platanos canarios",
      "proveedor_id": "01"
    },
    {
      "producto_id": "003",
      "referencia": "X00301",
      "descripcion": "Fresisui",
      "proveedor_id": "01"
    },
    {
      "producto_id": "004",
      "referencia": "X00401",
      "descripcion": "Palmeras de chocolate",
      "proveedor_id": "01"
    },
    {
      "producto_id": "005",
      "referencia": "X00501",
      "descripcion": "Macarrones",
      "proveedor_id": "01"
    },
    {
      "producto_id": "006",
      "referencia": "X00601",
      "descripcion": "Atun",
      "proveedor_id": "01",

    },
    {
      "producto_id": "007",
      "referencia": "X00701",
      "descripcion": "Maiz",
      "proveedor_id": "01",

    },
    {
      "producto_id": "008",
      "referencia": "X00801",
      "descripcion": "Patatas de bolsa",
      "proveedor_id": "01",

    },
    {
      "producto_id": "009",
      "referencia": "X00901",
      "descripcion": "Mandarinas",
      "proveedor_id": "01",

    },
    {
      "producto_id": "010",
      "referencia": "X01001",
      "descripcion": "Torreznos",
      "proveedor_id": "01",

    },
    {
      "producto_id": "011",
      "referencia": "X01102",
      "descripcion": "Leche fresca",
      "proveedor_id": "02",

    },
    {
      "producto_id": "012",
      "referencia": "X01202",
      "descripcion": "Platanos canarios",
      "proveedor_id": "02",

    },
    {
      "producto_id": "013",
      "referencia": "X01302",
      "descripcion": "Fresisui",
      "proveedor_id": "02",

    },
    {
      "producto_id": "014",
      "referencia": "X01402",
      "descripcion": "Palmeras de chocolate",
      "proveedor_id": "02",

    },
    {
      "producto_id": "015",
      "referencia": "X01502",
      "descripcion": "Macarrones",
      "proveedor_id": "02",

    },
    {
      "producto_id": "016",
      "referencia": "X01602",
      "descripcion": "Atun",
      "proveedor_id": "02",

    },
    {
      "producto_id": "017",
      "referencia": "X01702",
      "descripcion": "Maiz",
      "proveedor_id": "02",

    },
    {
      "producto_id": "018",
      "referencia": "X01802",
      "descripcion": "Patatas de bolsa",
      "proveedor_id": "02",

    },
    {
      "producto_id": "019",
      "referencia": "X01902",
      "descripcion": "Mandarinas",
      "proveedor_id": "02",

    },
    {
      "producto_id": "020",
      "referencia": "X02002",
      "descripcion": "Torreznos",
      "proveedor_id": "02",

    },
    {
      "producto_id": "021",
      "referencia": "X02103",
      "descripcion": "Leche fresca",
      "proveedor_id": "03",

    },
    {
      "producto_id": "022",
      "referencia": "X02203",
      "descripcion": "Platanos canarios",
      "proveedor_id": "03",

    },
    {
      "producto_id": "023",
      "referencia": "X02303",
      "descripcion": "Fresisui",
      "proveedor_id": "03",

    },
    {
      "producto_id": "024",
      "referencia": "X02403",
      "descripcion": "Palmeras de chocolate",
      "proveedor_id": "03",

    },
    {
      "producto_id": "025",
      "referencia": "X02503",
      "descripcion": "Macarrones",
      "proveedor_id": "03",

    },
    {
      "producto_id": "026",
      "referencia": "X02603",
      "descripcion": "Atun",
      "proveedor_id": "03",

    },
    {
      "producto_id": "027",
      "referencia": "X02703",
      "descripcion": "Maiz",
      "proveedor_id": "03",

    },
    {
      "producto_id": "028",
      "referencia": "X02803",
      "descripcion": "Patatas de bolsa",
      "proveedor_id": "03",

    },
    {
      "producto_id": "029",
      "referencia": "X02903",
      "descripcion": "Mandarinas",
      "proveedor_id": "03",

    },
    {
      "producto_id": "030",
      "referencia": "X03003",
      "descripcion": "Torreznos",
      "proveedor_id": "03",

    },
    {
      "producto_id": "031",
      "referencia": "X03104",
      "descripcion": "Leche fresca",
      "proveedor_id": "04",

    },
    {
      "producto_id": "032",
      "referencia": "X03204",
      "descripcion": "Platanos canarios",
      "proveedor_id": "04",

    },
    {
      "producto_id": "033",
      "referencia": "X03304",
      "descripcion": "Fresisui",
      "proveedor_id": "04",

    },
    {
      "producto_id": "034",
      "referencia": "X03404",
      "descripcion": "Palmeras de chocolate",
      "proveedor_id": "04",

    },
    {
      "producto_id": "035",
      "referencia": "X03504",
      "descripcion": "Macarrones",
      "proveedor_id": "04",

    },
    {
      "producto_id": "036",
      "referencia": "X03604",
      "descripcion": "Atun",
      "proveedor_id": "04",

    },
    {
      "producto_id": "037",
      "referencia": "X03704",
      "descripcion": "Maiz",
      "proveedor_id": "04",

    },
    {
      "producto_id": "038",
      "referencia": "X03804",
      "descripcion": "Patatas de bolsa",
      "proveedor_id": "04",

    },
    {
      "producto_id": "039",
      "referencia": "X03904",
      "descripcion": "Mandarinas",
      "proveedor_id": "04",

    },
    {
      "producto_id": "040",
      "referencia": "X04004",
      "descripcion": "Torreznos",
      "proveedor_id": "04",

    },
    {
      "producto_id": "041",
      "referencia": "X04105",
      "descripcion": "Leche fresca",
      "proveedor_id": "05",

    },
    {
      "producto_id": "042",
      "referencia": "X04205",
      "descripcion": "Platanos canarios",
      "proveedor_id": "05",

    },
    {
      "producto_id": "043",
      "referencia": "X04305",
      "descripcion": "Fresisui",
      "proveedor_id": "05",

    },
    {
      "producto_id": "044",
      "referencia": "X04405",
      "descripcion": "Palmeras de chocolate",
      "proveedor_id": "05",

    },
    {
      "producto_id": "045",
      "referencia": "X04505",
      "descripcion": "Macarrones",
      "proveedor_id": "05",

    },
    {
      "producto_id": "046",
      "referencia": "X04605",
      "descripcion": "Atun",
      "proveedor_id": "05",

    },
    {
      "producto_id": "047",
      "referencia": "X04705",
      "descripcion": "Maiz",
      "proveedor_id": "05",

    },
    {
      "producto_id": "048",
      "referencia": "X04805",
      "descripcion": "Patatas de bolsa",
      "proveedor_id": "05"
    },
    {
      "producto_id": "049",
      "referencia": "X04905",
      "descripcion": "Mandarinas",
      "proveedor_id": "05"
    },
    {
      "producto_id": "050",
      "referencia": "X05005",
      "descripcion": "Torreznos",
      "proveedor_id": "05"
    },    
  ]

  constructor() { }

  ngOnInit(): void {
  }

  pageChange(){
    console.log('Cambia');
  }

}
