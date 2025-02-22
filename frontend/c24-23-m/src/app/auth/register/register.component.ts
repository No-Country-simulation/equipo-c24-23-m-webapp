import { Component } from '@angular/core';
import { FormsModule, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true, // Indica que es un componente independiente
  imports: [FormsModule, ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerForm: FormGroup;

  constructor(private fb: FormBuilder) { 
    this.registerForm = this.fb.group({
      
      name: ['',[Validators.required]],
      apellido: [],
      email: ['', [Validators.required, Validators.email]],
      password: ['',[Validators.required, Validators.minLength(8)]], //Validaciones del formnulario
      userType: ['',[Validators.required]],
      calle: ['',[Validators.required]],
      enumeracion: ['',[Validators.required]],
      telefono: ['',[Validators.required, Validators.minLength(6)]],
    })
  }


  register() {
    if (this.registerForm.valid) {
      console.log(this.registerForm.value);    //Aca se enviarian los datos al backend
    }
    else{
      console.log("Formulario Invalido")
    }
  }

}