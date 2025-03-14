import { Component } from '@angular/core';
import { allRestaurants } from '../../cliente/restaurante-menu/restaurante-menu.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pedidos-repartidor',
  imports: [CommonModule],
  templateUrl: './pedidos-repartidor.component.html',
  styleUrl: './pedidos-repartidor.component.css'
})
export class PedidosRepartidorComponent {
  pedidoEnCurso = {
      idPedido: 1,
      idProducto: allRestaurants[0].products[0].id,
      idCliente: 101,
      idRepartidor: null,
      name: allRestaurants[0].products[0].name,
      nameRes: allRestaurants[0].name,
      direccion: "Av. Siempre Viva 123",
      estado: "EN CAMINO",
      fecha: "2025-03-10",
      hora: "12:30 PM",
      precio: allRestaurants[0].products[0].price,
      imagen: allRestaurants[0].products[0].image
    };
}
