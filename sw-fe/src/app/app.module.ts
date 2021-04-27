import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { CartComponent } from './pages/cart/cart.component';
import { ProductComponent } from './pages/product/product.component';
import { RegisterComponent } from './pages/register/register.component';
import { PedidosTrabajadorComponent } from './pages/pedidos-trabajador/pedidos-trabajador.component';


import { NavbarComponent } from './components/navbar/navbar.component';

//Angular Material
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { BarraCargaComponent } from './components/barra-carga/barra-carga.component';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductWorkerComponent } from './pages/product-worker/product-worker.component';
import { MatSortModule } from '@angular/material/sort';
import { PedidosPickingComponent } from './pages/pedidos-picking/pedidos-picking.component';
import { ReaprovisionamientoComponent } from './pages/reaprovisionamiento/reaprovisionamiento.component'
import { UserService } from './services/user.service'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ProductComponent,
    NavbarComponent,
    RegisterComponent,
    PedidosTrabajadorComponent,
    BarraCargaComponent,
    CartComponent,
    ProductWorkerComponent,
    PedidosPickingComponent,
    ReaprovisionamientoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    ReactiveFormsModule,
    MatProgressBarModule,
    MatBadgeModule,
    MatIconModule,
    MatPaginatorModule,
    MatTableModule,
    MatSelectModule,
    MatFormFieldModule,
    MatSortModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent],
})
export class AppModule {}
