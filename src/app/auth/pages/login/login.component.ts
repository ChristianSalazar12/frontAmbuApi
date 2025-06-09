import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service/auth.service';

@Component({
  selector: 'app-login',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      this.auth.login(username, password).subscribe({
        next: (token) => {
          localStorage.setItem('access_token', token.access_token);
          this.router.navigate(['/home']);
        },
        error: (err) => {
          alert('Login failed: ' + err.error?.error || 'Check credentials');
        },
      });
    }
  }
  loginWithGoogle(): void {
    const redirectUri = 'http://localhost:4200/login/callback'; // donde Keycloak redirige al terminar
    const keycloakUrl = 'http://localhost:8080';
    const realm = 'ambu-realm';
    const clientId = 'ambu-backend';

    const url = `${keycloakUrl}/realms/${realm}/protocol/openid-connect/auth
      ?client_id=${clientId}
      &redirect_uri=${encodeURIComponent(redirectUri)}
      &response_type=code
      &scope=openid
      &kc_idp_hint=google
      &prompt=select_account`.replace(/\s+/g, '');

    window.location.href = url;
  }
}
