import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { SlideRestaurantesComponent } from "../slide-restaurantes/slide-restaurantes.component";

@Component({
  selector: 'app-home-cliente',
  imports: [CommonModule, RouterModule, SlideRestaurantesComponent],
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

}
