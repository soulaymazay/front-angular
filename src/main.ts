// src/main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component'; // Assurez-vous que ce chemin est correct
import { appConfig } from './app/app.config'; // Assurez-vous que ce chemin est correct

// Utilisez `bootstrapApplication` pour démarrer l'application avec `AppComponent` et `appConfig`
bootstrapApplication(AppComponent, appConfig)
  .catch(err => console.error(err));
