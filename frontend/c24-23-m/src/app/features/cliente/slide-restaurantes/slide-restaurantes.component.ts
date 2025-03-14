import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-slide-restaurantes',
  imports: [CommonModule,CommonModule],
  templateUrl: './slide-restaurantes.component.html',
  styleUrl: './slide-restaurantes.component.css'
})
export class SlideRestaurantesComponent {



  constructor(private router: Router) {}

    // Datos de prueba
    restaurants = [
      { id: 1, name: 'Restaurante Italiano', image: 'https://via.placeholder.com/300x200' },
      { id: 2, name: 'Sushi Express', image: 'https://via.placeholder.com/300x200' },
      { id: 3, name: 'Asador Argentino', image: 'https://via.placeholder.com/300x200' },
      { id: 4, name: 'Tacos Mexicanos', image: 'https://via.placeholder.com/300x200' },
      { id: 5, name: 'Burger House', image: 'https://via.placeholder.com/300x200' },
      { id: 6, name: 'Veggie Delight', image: 'https://via.placeholder.com/300x200' },
      { id: 7, name: 'Gloton', image: 'https://via.placeholder.com/300x200' },
      { id: 8, name: 'Argumentos', image: 'https://via.placeholder.com/300x200' }
    ];
  
    // Función para dividir los restaurantes en grupos de 3 por slide
    getRestaurantGroups(): any[] {
      const chunkSize = 4;
      const groups = [];
      for (let i = 0; i < this.restaurants.length; i += chunkSize) {
        groups.push(this.restaurants.slice(i, i + chunkSize));
      }
      return groups;
    }
  
     // Navegar al menú del restaurante
     goToMenu(restaurantId: number) {
      this.router.navigate(['/menu', restaurantId]);
    }

}
