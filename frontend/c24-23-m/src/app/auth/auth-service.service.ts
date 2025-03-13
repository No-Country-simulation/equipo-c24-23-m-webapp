import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private userRole = new BehaviorSubject<string>('cliente'); // Rol inicial
  currentRole = this.userRole.asObservable();

  cambiarRol(nuevoRol: string) {
    this.userRole.next(nuevoRol);
  }
  constructor() { }
}
