import { Routes } from '@angular/router';
import { MainComponent } from './layout/main/main.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HomeClienteComponent } from './features/cliente/home-cliente/home-cliente.component';

export const routes: Routes = [
  {path: '',  redirectTo: 'home-clientes', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'main', component: MainComponent},
  {path: 'home-clientes', component: HomeClienteComponent}
];
