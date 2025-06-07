import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Attention } from '../../models/attention.model';

// Asumo que tienes un modelo Attention, si no, lo defines igual que Driver

@Injectable({
  providedIn: 'root',
})
export class AttentionService {
  private baseUrl = 'http://localhost:3005/api/user/attention';

  constructor(private http: HttpClient) {}

  // Obtener todas las atenciones
  getAttentions(): Observable<Attention[]> {
    return this.http.get<Attention[]>(this.baseUrl);
  }

  // Obtener atención por ID
  getAttentionById(id: number): Observable<Attention> {
    return this.http.get<Attention>(`${this.baseUrl}/${id}`);
  }

  // Crear nueva atención (POST a /add)
  addAttention(attention: Attention): Observable<Attention> {
    return this.http.post<Attention>(`${this.baseUrl}/add`, attention);
  }

  // Actualizar atención (PUT a /{id})
  updateAttention(attention: Attention): Observable<Attention> {
    return this.http.put<Attention>(
      `${this.baseUrl}/${attention.id}`,
      attention
    );
  }

  // Eliminar atención (DELETE a /{id})
  deleteAttention(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
