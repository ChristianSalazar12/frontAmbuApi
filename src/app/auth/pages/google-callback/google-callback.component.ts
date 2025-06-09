import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-google-callback',
  imports: [],
  templateUrl: './google-callback.component.html',
  styleUrl: './google-callback.component.css',
})
export class GoogleCallbackComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    const code = this.route.snapshot.queryParamMap.get('code');
    const redirectUri = 'http://localhost:4200/login/callback';

    if (code) {
      const body = new HttpParams()
        .set('grant_type', 'authorization_code')
        .set('code', code)
        .set('client_id', 'ambu-backend')
        .set('redirect_uri', redirectUri)
        .set('client_secret', 'lyYGHNI9p3gisof56n1nYmW3gWTex6uq'); // Si es confidential client

      this.http
        .post(
          'http://localhost:8080/realms/ambu-realm/protocol/openid-connect/token',
          body,
          {
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          }
        )
        .subscribe({
          next: (data: any) => {
            localStorage.setItem('access_token', data.access_token);
            this.router.navigate(['/home']);
          },
          error: (err) => {
            console.error('Error al autenticar con Google:', err);
            this.router.navigate(['/login']);
          },
        });
    } else {
      this.router.navigate(['/login']);
    }
  }
}
