import { Component } from '@angular/core';
import { allRestaurants } from '../../cliente/restaurante-menu/restaurante-menu.component';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-eliminar-producto',
  imports: [CommonModule],
  templateUrl: './eliminar-producto.component.html',
  styleUrl: './eliminar-producto.component.css'
})
export class EliminarProductoComponent {

  restaurante: any = null; // Aquí se guardará la info del restaurante
  productos: any[] = []; // Aquí se guardarán sus productos

  constructor(private route: ActivatedRoute) {}
  
    ngOnInit() {
      const idRestaurante = Number(this.route.snapshot.paramMap.get('id'));
  
      // Buscar el restaurante con el ID especificado
      this.restaurante = allRestaurants.find(rest => rest.id === idRestaurante);
  
      if (this.restaurante) {
        this.productos = this.restaurante.products;
        
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
