import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
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
        console.log("Formualrio Invalido")
      }
    }

}
