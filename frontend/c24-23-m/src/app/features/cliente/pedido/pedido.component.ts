import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pedido',
  imports: [CommonModule],
  templateUrl: './pedido.component.html',
  styleUrl: './pedido.component.css'
})
export class PedidoComponent {
   pedido = 
    {
      id: 1,
      name: "Tiramisu",
      description: 'Postre italiano con cafe y mascarpone',
      cantidad: 2,
      estado: "EN CAMINO",
      direccion: "Juan manuel campero 4783"
      
    }
}
