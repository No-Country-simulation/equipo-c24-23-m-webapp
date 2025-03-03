import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { SlideRestaurantesComponent } from "../slide-restaurantes/slide-restaurantes.component";

@Component({
  selector: 'app-restaurantes',
  imports: [RouterModule, CommonModule, SlideRestaurantesComponent],
  templateUrl: './restaurantes.component.html',
  styleUrl: './restaurantes.component.css'
})
export class RestaurantesComponent {

}
