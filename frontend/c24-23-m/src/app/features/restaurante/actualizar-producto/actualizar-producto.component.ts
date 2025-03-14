import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { allRestaurants } from '../../cliente/restaurante-menu/restaurante-menu.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-actualizar-producto',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './actualizar-producto.component.html',
  styleUrl: './actualizar-producto.component.css'
})
export class ActualizarProductoComponent {

  product: any = {}; // En lugar de null

  productoForm: FormGroup;
  imagenPreview: string | ArrayBuffer | null = null;

  constructor(private fb: FormBuilder, private route: ActivatedRoute) {
    this.productoForm = this.fb.group({
      titulo: ['', [Validators.required, Validators.minLength(3)]],
      descripcion: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(50)]],
      precio: ['', [Validators.required, Validators.min(1)]],
      imagen: [null, Validators.required]
    });
  }


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

    // **Asignar valores al formulario reactivo**
    this.productoForm.patchValue({
      titulo: this.product.name,
      descripcion: this.product.description,
      precio: this.product.price,
      imagen: this.product.imagen || null
    });

    // Si la imagen ya existe, mostrarla en la previsualización
    if (this.product.imagen) {
      this.imagenPreview = this.product.imagen;
    }
  }

  // Método para manejar la carga de la imagen y recortarla
  onImageUpload(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const img = new Image();
        img.src = e.target.result;
        img.onload = () => {
          const canvas = document.createElement('canvas');
          const ctx = canvas.getContext('2d');

          // Definir tamaño cuadrado
          const size = 150;
          canvas.width = size;
          canvas.height = size;

          // Recortar imagen centrada
          ctx!.drawImage(img, 0, 0, size, size);

          // Convertir a base64
          this.imagenPreview = canvas.toDataURL('image/png');
          this.productoForm.patchValue({ imagen: this.imagenPreview });
        };
      };
      reader.readAsDataURL(file);
    }
  }

  // Método para enviar datos
  onSubmit() {
    if (this.productoForm.valid) {
      console.log('Producto Enviado:', this.productoForm.value);
      // Aquí se enviaría al backend cuando esté listo
    }
  }
}
