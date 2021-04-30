import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './pages/product/product.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { PedidosTrabajadorComponent } from './pages/pedidos-trabajador/pedidos-trabajador.component';
import { CartComponent } from './pages/cart/cart.component';
import { ProductWorkerComponent } from './pages/product-worker/product-worker.component';
import { PickingOrdersComponent } from './pages/picking-orders/picking-orders.component';
import { OrderPageComponent } from './pages/order-page/order-page.component';
import { ReaprovisionamientoComponent } from './pages/reaprovisionamiento/reaprovisionamiento.component';
import { PedidoPickingComponent } from './pages/pedido-picking/pedido-picking.component';
import { AuthService } from './services/auth.service';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'products',
    component: HomeComponent,
    canActivate: [AuthService],
    data: { role: 'customer'}
  },
  {
    path: 'product/:id',
    component: ProductComponent,
    canActivate: [AuthService],
    data: { role: 'customer'}
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
    canActivate: [AuthService],
    data: { role: 'customer'}
  },
  {
    path: 'workerProducts',
    component: ProductWorkerComponent,
    canActivate: [AuthService],
    data: { role: 'worker'}
  },
  {
    path: 'pickingOrders',
    component: PickingOrdersComponent,
    canActivate: [AuthService],
    data: { role: 'worker'}
  },
  {
    path: 'orderPage/:id',
    component: OrderPageComponent,
    canActivate: [AuthService],
    data: { role: 'worker'}
  },
  {
    path: 'reaprovisionamiento',
    component: ReaprovisionamientoComponent,
    canActivate: [AuthService],
    data: { role: 'worker'}
  },
  {
    path: 'pedidoPicking/:id',
    component: PedidoPickingComponent,
    canActivate: [AuthService],
    data: { role: 'worker'}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
