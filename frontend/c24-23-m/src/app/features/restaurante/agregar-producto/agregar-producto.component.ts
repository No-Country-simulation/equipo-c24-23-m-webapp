import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar-producto',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './agregar-producto.component.html',
  styleUrl: './agregar-producto.component.css'
})
export class AgregarProductoComponent {
  productoForm: FormGroup;
  imagenPreview: string | ArrayBuffer | null = null;

  constructor(private fb: FormBuilder) {
    this.productoForm = this.fb.group({
      titulo: ['', [Validators.required, Validators.minLength(3)]],
      descripcion: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(50)]],
      precio: ['', [Validators.required, Validators.min(1)]],
      imagen: [null, Validators.required]
    });
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
