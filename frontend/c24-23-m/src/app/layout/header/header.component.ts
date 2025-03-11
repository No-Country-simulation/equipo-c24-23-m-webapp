import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { allRestaurants } from '../../features/cliente/restaurante-menu/restaurante-menu.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  // constructor(private router: Router,private route: ActivatedRoute) {}

  constructor(private router: Router) {
    // Obtener ID desde la URL
    this.router.events.subscribe(() => {
      const urlSegments = this.router.url.split('/');
      const index = urlSegments.indexOf('home-restaurantes');
      if (index !== -1 && urlSegments[index + 1]) {
        this.restauranteId = urlSegments[index + 1];
      }
    });
  }

  userRole: string = 'restaurante'; // Guardará el rol del usuario

  nombreUsuario: string = 'Joaquin'  // nombre del cliente restaurante o repartidor

  restaurante: any = null; // Aquí se guardará la info del restaurante
  productos: any[] = []; // Aquí se guardarán sus productos


  restauranteId: string | null = null;

  logout() {
    // this.authService.logout();
    this.router.navigate(['/login']);
  }

  

}
