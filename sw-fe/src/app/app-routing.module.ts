import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './pages/product/product.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { CartComponent } from './pages/cart/cart.component';
import { ProductWorkerComponent } from './pages/product-worker/product-worker.component';
import { PickingOrdersComponent } from './pages/picking-orders/picking-orders.component';
import { OrderPageComponent } from './pages/order-page/order-page.component';
import { ReaprovisionamientoComponent } from './pages/reaprovisionamiento/reaprovisionamiento.component';
import { PedidoPickingComponent } from './pages/pedido-picking/pedido-picking.component';
import { AuthGuard } from './guards/auth.guard';
import { WorkerGuard } from './guards/worker.guard';
import { CustomerGuard } from './guards/customer.guard';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'worker',
    canActivate: [AuthGuard, WorkerGuard],
    canActivateChild: [AuthGuard, WorkerGuard],
    children: [
      {
        path: 'workerProducts',
        component: ProductWorkerComponent,
      },
      {
        path: 'pickingOrders',
        component: PickingOrdersComponent,
      },
      {
        path: 'orderPage/:id',
        component: OrderPageComponent,
      },
      {
        path: 'reaprovisionamiento',
        component: ReaprovisionamientoComponent,
      },
      {
        path: 'pedidoPicking/:id',
        component: PedidoPickingComponent,
      },
      {
        path: '**',
        redirectTo: 'pickingOrders',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    canActivate: [AuthGuard, CustomerGuard],
    canActivateChild: [AuthGuard, CustomerGuard],
    children: [
      {
        path: 'products',
        component: HomeComponent,
      },
      {
        path: 'product/:id',
        component: ProductComponent,
      },
      {
        path: 'cart',
        component: CartComponent,
      },
      {
        path: '**',
        redirectTo: 'products',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
