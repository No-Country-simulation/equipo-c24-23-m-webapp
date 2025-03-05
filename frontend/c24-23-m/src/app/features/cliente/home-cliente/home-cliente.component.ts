import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { SlideRestaurantesComponent } from "../slide-restaurantes/slide-restaurantes.component";
import { allRestaurants } from '../restaurante-menu/restaurante-menu.component';

@Component({
  selector: 'app-home-cliente',
  imports: [CommonModule, RouterModule, SlideRestaurantesComponent],
  templateUrl: './home-cliente.component.html',
  styleUrl: './home-cliente.component.css'
})
export class HomeClienteComponent implements OnInit{

  allProducts: any[] = []; // Aquí guardaremos todos los productos mezclados

  ngOnInit() {
    // Extraer todos los productos de cada restaurante y juntarlos en una sola lista ALEATORIA 
    this.allProducts = allRestaurants
  .flatMap(restaurant => restaurant.products) 
  .sort(() => Math.random() - 0.5);
  }

  constructor(private router: Router) {}
  

  // Función para dividir los productos en grupos de 3 por slide
  getProductGroups(): any[] {
    const chunkSize = 3;
    const groups = [];
    for (let i = 0; i < this.allProducts.length; i += chunkSize) {
      groups.push(this.allProducts.slice(i, i + chunkSize));
    }
    return groups;
  }

}
