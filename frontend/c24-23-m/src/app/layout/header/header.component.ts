import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(private router: Router) {}

  userRole: string = 'restaurante'; // Guardará el rol del usuario

  nombreUsuario: string = 'Joaquin'  // nombre del cliente restaurante o repartidor

  logout() {
    // this.authService.logout();
    this.router.navigate(['/login']);
  }

}
