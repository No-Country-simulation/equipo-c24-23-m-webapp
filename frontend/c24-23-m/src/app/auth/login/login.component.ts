import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { AuthGoogleService } from '../../core/services/auth-google.service';

@Component({
  selector: 'app-login',
  imports: [FormsModule, ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private authGoogleService: AuthGoogleService) { }
  login() {
    this.authGoogleService.login();
  }


}
