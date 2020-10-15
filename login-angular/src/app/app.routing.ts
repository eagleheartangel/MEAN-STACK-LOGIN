// Importar los modulos del router
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Importar comp0onentes
import { HomeComponent } from './components/home/home.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { MusicaComponent } from './components/musica/musica.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { ContratarComponent } from './components/contratar/contratar.component';
import { LoginComponent } from './components/login/login.component'; //ruta del login component
import { RegisterComponent } from './components/register/register.component';

// Crear Array de rutas
const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'inicio', component: HomeComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'eventos', component: EventosComponent },
  { path: 'galeria', component: GaleriaComponent },
  { path: 'musica', component: MusicaComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'contratar', component: ContratarComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegisterComponent },
  { path: '**', component: LoginComponent },
];
// Exportar configuracion
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(
  appRoutes
);
