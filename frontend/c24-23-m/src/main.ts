import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';  // Importa las rutas definidas
import { RouterModule } from '@angular/router';

// Agregar RouterModule a la configuración
bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouterModule, useValue: RouterModule.forRoot(routes) },
    ...appConfig.providers, // Si hay más proveedores en appConfig
  ],
})
.catch((err) => console.error(err));
