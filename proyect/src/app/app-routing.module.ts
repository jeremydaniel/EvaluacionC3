import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClienteDetailsComponent } from './Cliente/cliente-details/cliente-details.component';
import { ClienteListComponent } from './Cliente/cliente-list/cliente-list.component';
import { CreateClienteComponent } from './Cliente/create-cliente/create-cliente.component';
import { UpdateClienteComponent } from './Cliente/update-cliente/update-cliente.component';
import { CreateVendedorComponent } from './Vendedor/create-vendedor/create-vendedor.component';
import { UpdateVendedorComponent } from './Vendedor/update-vendedor/update-vendedor.component';
import { VendedorDetailsComponent } from './Vendedor/vendedor-details/vendedor-details.component';
import { VendedorListComponent } from './Vendedor/vendedor-list/vendedor-list.component';
import { CreateVentaComponent } from './Venta/create-venta/create-venta.component';
import { UpdateVentaComponent } from './Venta/update-venta/update-venta.component';
import { VentaDetailsComponent } from './Venta/venta-details/venta-details.component';
import { VentaListComponent } from './Venta/venta-list/venta-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'cliente', pathMatch: 'full' },
  { path: 'cliente', component: ClienteListComponent },
  { path: 'addCliente', component: CreateClienteComponent },
  { path: 'updateCliente/:idcliente', component: UpdateClienteComponent },
  { path: 'detailsCliente/:idcliente', component: ClienteDetailsComponent },
  { path: 'Vendedor', component: VendedorListComponent },
  { path: 'addVendedor', component: CreateVendedorComponent },
  { path: 'updateVendedor/:id', component: UpdateVendedorComponent },
  { path: 'detailsVendedor/:id', component: VendedorDetailsComponent },
  { path: 'Venta', component: VentaListComponent },
  { path: 'addVenta', component: CreateVentaComponent },
  { path: 'updateVenta/:id', component: UpdateVentaComponent },
  { path: 'detailsVenta/:id', component: VentaDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
