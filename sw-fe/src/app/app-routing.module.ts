import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './pages/product/product.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { PedidosTrabajadorComponent } from './pages/pedidos-trabajador/pedidos-trabajador.component';
import { CartComponent } from './pages/cart/cart.component';
import { ProductWorkerComponent } from './pages/product-worker/product-worker.component';
import { PedidosPickingComponent } from './pages/pedidos-picking/pedidos-picking.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'product/:id',
    component: ProductComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'pedidos-trabajador',
    component: PedidosTrabajadorComponent,
  },{
    path: 'cart',
    component: CartComponent,
  },
  {
    path: 'workerProducts',
    component: ProductWorkerComponent
  },
  {
    path: 'pickingOrders',
    component: PedidosPickingComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
