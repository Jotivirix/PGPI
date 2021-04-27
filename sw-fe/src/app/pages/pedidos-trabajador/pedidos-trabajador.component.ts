import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pedidos-trabajador',
  templateUrl: './pedidos-trabajador.component.html',
  styleUrls: ['./pedidos-trabajador.component.scss']
})
export class PedidosTrabajadorComponent implements OnInit {
  loading:boolean;

  pedidos :any;
  pedidosLocal = [
    {
      id:'01',
      user_id: '20',
      datetime: '2020-05-20',
      status: 'shipping'
    },
    {
      id:'02',
      user_id: '20',
      datetime: '2020-05-20',
      status: 'shipping'
    },
    {
      id:'03',
      user_id: '20',
      datetime: '2020-05-20',
      status: 'shipping'
    },
    {
      id:'04',
      user_id: '20',
      datetime: '2020-05-20',
      status: 'shipping'
    },
    {
      id:'05',
      user_id: '20',
      datetime: '2020-05-20',
      status: 'shipping'
    },
    {
      id:'06',
      user_id: '20',
      datetime: '2020-05-20',
      status: 'shipping'
    },
    {
      id:'07',
      user_id: '20',
      datetime: '2020-05-20',
      status: 'shipping'
    },
    {
      id:'08',
      user_id: '20',
      datetime: '2020-05-20',
      status: 'shipping'
    },
    {
      id:'09',
      user_id: '20',
      datetime: '2020-05-20',
      status: 'shipping'
    }
  ]


  pedidosLocalCurso = [
    {
      id:'01',
      user_id: '20',
      datetime: '2020-05-20',
      status: 'En curso'
    },
    {
      id:'02',
      user_id: '20',
      datetime: '2020-05-20',
      status: 'En curso'
    },
    {
      id:'03',
      user_id: '20',
      datetime: '2020-05-20',
      status: 'En curso'
    },
    {
      id:'04',
      user_id: '20',
      datetime: '2020-05-20',
      status: 'En curso'
    },
    {
      id:'05',
      user_id: '20',
      datetime: '2020-05-20',
      status: 'En curso'
    },
    {
      id:'06',
      user_id: '20',
      datetime: '2020-05-20',
      status: 'En curso'
    },
    {
      id:'07',
      user_id: '20',
      datetime: '2020-05-20',
      status: 'En curso'
    },
    {
      id:'08',
      user_id: '20',
      datetime: '2020-05-20',
      status: 'En curso'
    },
    {
      id:'09',
      user_id: '20',
      datetime: '2020-05-20',
      status: 'En curso'
    }
  ]

  pedidosLocalEnviados = [
    {
      id:'01',
      user_id: '20',
      datetime: '2020-05-20',
      status: 'Enviado'
    },
    {
      id:'02',
      user_id: '20',
      datetime: '2020-05-20',
      status: 'Enviado'
    },
    {
      id:'03',
      user_id: '20',
      datetime: '2020-05-20',
      status: 'Enviado'
    },
    {
      id:'04',
      user_id: '20',
      datetime: '2020-05-20',
      status: 'Enviado'
    },
    {
      id:'05',
      user_id: '20',
      datetime: '2020-05-20',
      status: 'Enviado'
    },
    {
      id:'06',
      user_id: '20',
      datetime: '2020-05-20',
      status: 'Enviado'
    },
    {
      id:'07',
      user_id: '20',
      datetime: '2020-05-20',
      status: 'Enviado'
    },
    {
      id:'08',
      user_id: '20',
      datetime: '2020-05-20',
      status: 'Enviado'
    },
    {
      id:'09',
      user_id: '20',
      datetime: '2020-05-20',
      status: 'Enviado'
    }
  ]
  constructor() {
    this.loading = true;
   }

  ngOnInit(): void {
    this.getPedidos();
  }

  async getPedidos():Promise<any>{

  }
}
