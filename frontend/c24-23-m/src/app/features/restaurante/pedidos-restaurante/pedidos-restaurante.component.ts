import { Component } from '@angular/core';
import { allRestaurants } from '../../cliente/restaurante-menu/restaurante-menu.component';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { pedidos } from '../home-restaurante/home-restaurante.component';

@Component({
  selector: 'app-pedidos-restaurante',
  imports: [CommonModule],
  templateUrl: './pedidos-restaurante.component.html',
  styleUrl: './pedidos-restaurante.component.css'
})
export class PedidosRestauranteComponent {

  pedidosPendientes: any[] = [];
  pedidosEnPreparacion: any[] = [];
  
  restaurante: any = null; // Aquí se guardará la info del restaurante
  productos: any[] = []; // Aquí se guardarán sus productos

  constructor(private route: ActivatedRoute) {}
  
  ngOnInit() {
    const idRestaurante = Number(this.route.snapshot.paramMap.get('id'));

    // Buscar el restaurante con el ID especificado
    this.restaurante = allRestaurants.find(rest => rest.id === idRestaurante);

    if (this.restaurante) {
      this.productos = this.restaurante.products;

      // Filtrar pedidos
      this.pedidosPendientes = pedidos.filter(pedido => pedido.estado === 'PENDIENTE');
      this.pedidosEnPreparacion = pedidos.filter(pedido => pedido.estado === 'EN PREPARACION');
    } else {
      console.error("Restaurante no encontrado");
    }
  }

  // Función para dividir los pedidos en grupos de 3 por slide
  getPedidosPGroups(): any[] {
    return this.chunkArray(this.pedidosPendientes, 3);
  }

  getPedidosEGroups(): any[] {
    return this.chunkArray(this.pedidosEnPreparacion, 3);
  }

  private chunkArray(array: any[], size: number): any[] {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  }
}
