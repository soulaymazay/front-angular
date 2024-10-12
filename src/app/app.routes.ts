// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component'; // Chemin corrigé pour le composant UserComponent

export const routes: Routes = [
  { path: 'users', component: UserComponent },
  { path: 'login', component: LoginComponent },
  { path: 'acceuil', component: AcceuilComponent }
];


export class AppRoutingModule {}
