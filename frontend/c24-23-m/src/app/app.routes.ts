import { Routes } from '@angular/router';
import { MainComponent } from './layout/main/main.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HomeClienteComponent } from './features/cliente/home-cliente/home-cliente.component';
import { RestaurantesComponent } from './features/cliente/restaurantes/restaurantes.component';
import { RestauranteMenuComponent } from './features/cliente/restaurante-menu/restaurante-menu.component';
import { ConfirmarComponent } from './features/cliente/confirmar/confirmar.component';
import { PedidoComponent } from './features/cliente/pedido/pedido.component';
import { HomeRestauranteComponent } from './features/restaurante/home-restaurante/home-restaurante.component';
import { AgregarProductoComponent } from './features/restaurante/agregar-producto/agregar-producto.component';
import { EliminarProductoComponent } from './features/restaurante/eliminar-producto/eliminar-producto.component';

export const routes: Routes = [
  {path: '',  redirectTo: 'home-clientes', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'main', component: MainComponent},
  {path: 'home-clientes', component: HomeClienteComponent},
  {path: 'restaurantes-clientes', component:RestaurantesComponent},
  {path: 'menu/:id', component: RestauranteMenuComponent },
  {path: 'confirmar/:id', component: ConfirmarComponent },
  {path: 'pedidos-clientes', component: PedidoComponent  },
  // {path: 'pedido/:id', component: PedidoComponent  },
  {path: 'home-restaurantes/:id', component: HomeRestauranteComponent},
  {path: 'agregar-producto', component: AgregarProductoComponent},
  {path: 'eliminar-producto/:id', component: EliminarProductoComponent}
  
  
];
