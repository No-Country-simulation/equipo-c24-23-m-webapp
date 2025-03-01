import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home-cliente',
  imports: [CommonModule, RouterModule],
  templateUrl: './home-cliente.component.html',
  styleUrl: './home-cliente.component.css'
})
export class HomeClienteComponent {

  constructor(private router: Router) {}
  
  // Datos de prueba
  products = [
    { id: 1, name: 'Hamburguesa Clasica1', image: 'https://via.placeholder.com/300', description: 'Hamburguesa clasica de la casa con tomate, lechuga, queso y aderezos',price:10500 },
    { id: 2, name: 'Hamburguesa Clasica2', image: 'https://via.placeholder.com/300', description: 'Hamburguesa clasica de la casa con tomate, lechuga, queso y aderezos',price:10500  },
    { id: 3, name: 'Hamburguesa Clasica3', image: 'https://via.placeholder.com/300', description: 'Hamburguesa clasica de la casa con tomate, lechuga, queso y aderezos',price:10500  },
    { id: 4, name: 'Hamburguesa Clasica4', image: 'https://via.placeholder.com/300', description: 'Hamburguesa clasica de la casa con tomate, lechuga, queso y aderezos',price:10500  },
    { id: 5, name: 'Hamburguesa Clasica5', image: 'https://via.placeholder.com/300', description: 'Hamburguesa clasica de la casa con tomate, lechuga, queso y aderezos',price:10500  },
    { id: 6, name: 'Hamburguesa Clasica6', image: 'https://via.placeholder.com/300', description: 'Hamburguesa clasica de la casa con tomate, lechuga, queso y aderezos',price:10500  }
  ];

  // Función para dividir los productos en grupos de 3 por slide
  getProductGroups(): any[] {
    const chunkSize = 3;
    const groups = [];
    for (let i = 0; i < this.products.length; i += chunkSize) {
      groups.push(this.products.slice(i, i + chunkSize));
    }
    return groups;
  }

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
