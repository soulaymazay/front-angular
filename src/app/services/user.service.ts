import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { User } from './user';
// Assurez-vous que ce chemin est correct et que le modèle User est défini.

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://localhost:8080/backend/users'; // URL correcte de l'API


  constructor(private http: HttpClient) {}

  // Méthode pour obtenir les détails d'un utilisateur par ID
  public getUserById(userid: number): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/${userid}`);
  }

  // Méthode pour obtenir tous les utilisateurs
  public getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }
 
}

