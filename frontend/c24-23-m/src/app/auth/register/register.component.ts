import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true, // ✅ Indica que es un componente independiente
  imports: [FormsModule], // ✅ Importar FormsModule aquí
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  userType: string = ''; // ✅ Variable para guardar el tipo de usuario
}