import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { allRestaurants } from '../restaurante-menu/restaurante-menu.component';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-confirmar',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './confirmar.component.html',
  styleUrl: './confirmar.component.css'
})
export class ConfirmarComponent {

  product: any = {}; // En lugar de null

  cantidad = new FormControl(1);
  qty = this.cantidad.value;

  envio:number = 500;

  total:number = 0;

  direccion = new FormControl('',Validators.required);
  


  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Obtener el ID del producto desde la URL
    const productId = Number(this.route.snapshot.paramMap.get('id'));

    if (!productId) {
      console.error("ID de producto inválido.");
      return;
    }

    // Buscar el producto en los restaurantes
    for (const restaurant of allRestaurants) {
      const foundProduct = restaurant.products.find(p => p.id === productId);
      if (foundProduct) {
        this.product = foundProduct;
        break;
      }
    }

    if (!this.product) {
      console.error("Producto no encontrado.");
      return;
    }

    this.calculateTotal();

    // Actualizar total cuando cambie la cantidad
    this.cantidad.valueChanges.subscribe(() => this.calculateTotal());
  }

  calculateTotal() {
    const qty = this.cantidad.value || 1;
    this.total = (this.product.price * qty) + this.envio;
  }


  pagarConMercadoPago() {
    const preference = {
      items: [
        {
          title: this.product.name,
          unit_price: this.product.price,
          quantity: this.cantidad.value || 1
        }
      ],
      back_urls: {
        success: "http://localhost:4200/pago-exitoso",
        failure: "http://localhost:4200/pago-fallido"
      },
      auto_return: "approved"
    };

    fetch("http://localhost:3000/create_preference", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(preference)
    })
    .then(response => response.json())
    .then(data => {
      window.location.href = data.init_point;
    })
    .catch(error => console.error(error));
  }
} 
