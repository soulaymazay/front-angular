import { CommonModule } from '@angular/common'; // Importer CommonModule
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router'; // Assurez-vous d'importer Router
import { AuthService } from '../services/authservice';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule], // Importer CommonModule et ReactiveFormsModule
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  loginForm: FormGroup;
  errorMessage: string | null = null;
  loginError: boolean = false;
  loginSuccess: boolean = false;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      // Optionally handle form validation errors
      return;
    }

    const { email, password } = this.loginForm.value; // Accéder aux valeurs du formulaire

    this.authService.login(email, password).subscribe(
      response => {
        console.log(response); // devrait afficher "Login successful"
        this.router.navigate(['/acceuil']); // ou toute autre action
      },
      error => {
        console.error('Login failed', error);
        this.loginError = true;
        this.errorMessage = 'Login failed. Please try again.';
      }
    );
  }
}
