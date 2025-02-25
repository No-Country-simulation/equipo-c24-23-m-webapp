import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
<<<<<<< Updated upstream
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
=======
import { AuthGoogleService } from '../../core/services/auth-google.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
>>>>>>> Stashed changes
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule, ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm!: FormGroup;
  
    constructor(private fb: FormBuilder) { 
      this.loginForm = this.fb.group({
        
        email: ['', [Validators.required, Validators.email]],
        password: ['',[Validators.required, Validators.minLength(8)]], //Validaciones del formnulario
      })
    }
  
  
    login() {
      if (this.loginForm.valid) {
        console.log(this.loginForm.value);    //Aca se enviarian los datos al backend
      }
      else{
        console.log("Formulario Invalido")
      }
    }

}
