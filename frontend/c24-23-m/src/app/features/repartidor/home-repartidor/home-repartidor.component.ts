import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { pedidos } from '../../restaurante/home-restaurante/home-restaurante.component';
import { allRestaurants } from '../../cliente/restaurante-menu/restaurante-menu.component';



@Component({
  selector: 'app-home-repartidor',
  imports: [CommonModule, RouterLink],
  templateUrl: './home-repartidor.component.html',
  styleUrl: './home-repartidor.component.css'
})
export class HomeRepartidorComponent {
  pedidosAsignarRepartidor: any[] = [];

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

  ngOnInit() {
        // Filtrar pedidos
        this.pedidosAsignarRepartidor = pedidos.filter(pedido => pedido.estado === 'LISTO');
    }

  // Función para dividir los pedidos en grupos de 3 por slide

  getPedidosAsignarGroups(): any[] {
    return this.chunkArray(this.pedidosAsignarRepartidor, 3);
  }

  getPedidosCursoGroups() {
    // Si estás agrupando los pedidos, puedes retornar un array de pedidos agrupados
    return [[this.pedidoEnCurso]]; // En este caso, solo un pedido
  }

  private chunkArray(array: any[], size: number): any[] {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  }
}
