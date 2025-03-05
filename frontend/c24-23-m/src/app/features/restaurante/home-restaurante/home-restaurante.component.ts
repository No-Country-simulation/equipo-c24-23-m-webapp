import { Component, OnInit } from '@angular/core';
import { allRestaurants } from '../../cliente/restaurante-menu/restaurante-menu.component';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

export const pedidos = [
  {
    idPedido: 1,
    idProducto: allRestaurants[0].products[0].id,
    idCliente: 101,
    idRepartidor: null,
    name: allRestaurants[0].products[0].name,
    direccion: "Av. Siempre Viva 123",
    estado: "PENDIENTE",
    fecha: "2025-03-10",
    hora: "12:30 PM",
    imagen: allRestaurants[0].products[0].image
  },
  {
    idPedido: 2,
    idProducto: allRestaurants[0].products[1].id,
    idCliente: 102,
    idRepartidor: 201,
    name: allRestaurants[0].products[1].name,
    direccion: "Calle Falsa 456",
    estado: "EN PREPARACION",
    fecha: "2025-03-10",
    hora: "1:00 PM",
    imagen: allRestaurants[0].products[1].image
  },
  {
    idPedido: 3,
    idProducto: allRestaurants[1].products[0].id,
    idCliente: 103,
    idRepartidor: 202,
    name: allRestaurants[1].products[0].name,
    direccion: "Calle Principal 789",
    estado: "LISTO",
    fecha: "2025-03-10",
    hora: "1:30 PM",
    imagen: allRestaurants[1].products[0].image
  },
  {
    idPedido: 4,
    idProducto: allRestaurants[1].products[1].id,
    idCliente: 104,
    idRepartidor: 203,
    name: allRestaurants[1].products[1].name,
    direccion: "Av. Libertador 321",
    estado: "EN CAMINO",
    fecha: "2025-03-10",
    hora: "2:00 PM",
    imagen: allRestaurants[1].products[1].image
  },
  {
    idPedido: 5,
    idProducto: allRestaurants[2].products[0].id,
    idCliente: 105,
    idRepartidor: 204,
    name: allRestaurants[2].products[0].name,
    direccion: "Ruta 8 KM 15",
    estado: "ENTREGADO",
    fecha: "2025-03-10",
    hora: "2:30 PM",
    imagen: allRestaurants[2].products[0].image
  },
  {
    idPedido: 6,
    idProducto: allRestaurants[2].products[1].id,
    idCliente: 106,
    idRepartidor: null,
    name: allRestaurants[2].products[1].name,
    direccion: "Zona Sur 654",
    estado: "RECHAZADO",
    fecha: "2025-03-10",
    hora: "3:00 PM",
    imagen: allRestaurants[2].products[1].image
  }
];


@Component({
  selector: 'app-home-restaurante',
  imports: [CommonModule,RouterLink],
  templateUrl: './home-restaurante.component.html',
  styleUrl: './home-restaurante.component.css'
})
export class HomeRestauranteComponent implements OnInit{

  //Del 1 al 8 son todos diferentes id de restaurantes

  restaurante: any = null; // Aquí se guardará la info del restaurante
  productos: any[] = []; // Aquí se guardarán sus productos

  pedidosVigentes: any[] = [];
  historialPedidos: any[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const idRestaurante = Number(this.route.snapshot.paramMap.get('id'));

    // Buscar el restaurante con el ID especificado
    this.restaurante = allRestaurants.find(rest => rest.id === idRestaurante);

    if (this.restaurante) {
      this.productos = this.restaurante.products;
      
      // Filtrar pedidos
      this.pedidosVigentes = pedidos.filter(pedido => 
        ["PENDIENTE", "EN PREPARACION", "LISTO", "EN CAMINO"].includes(pedido.estado)
      );
      
      this.historialPedidos = pedidos.filter(pedido => 
        ["ENTREGADO", "RECHAZADO"].includes(pedido.estado)
      );
    } else {
      console.error("Restaurante no encontrado");
    }
  
  }

  // Función para dividir los productos en grupos de 3 por slide
  getProductGroups(): any[] {
    const chunkSize = 3;
    const groups = [];
    for (let i = 0; i < this.productos.length; i += chunkSize) {
      groups.push(this.productos.slice(i, i + chunkSize));
    }
    return groups;
  }
}
