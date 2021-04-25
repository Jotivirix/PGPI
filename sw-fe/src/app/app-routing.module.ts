import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './pages/product/product.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { CartComponent } from './pages/cart/cart.component';
import { ProductWorkerComponent } from './pages/product-worker/product-worker.component';
import { PickingOrdersComponent } from './pages/picking-orders/picking-orders.component';
import { OrderPageComponent } from './pages/order-page/order-page.component';

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
    path: 'cart',
    component: CartComponent,
  },
  {
    path: 'workerProducts',
    component: ProductWorkerComponent
  },
  {
    path: 'pickingOrders',
    component: PickingOrdersComponent
  },
  {
    path: 'orderPage/:id',
    component: OrderPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
