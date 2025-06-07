import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Auxiliar } from '../../models/Auxiliar.model';

@Injectable({
  providedIn: 'root',
})
export class AuxiliarService {
  private baseUrl = 'http://localhost:3005/api/admin/assistant';

  constructor(private http: HttpClient) {}

  // Obtener todos los auxiliares
  obtenerAuxiliares(): Observable<Auxiliar[]> {
    return this.http.get<Auxiliar[]>(this.baseUrl);
  }

  getAuxiliarById(id: number): Observable<Auxiliar> {
    return this.http.get<Auxiliar>(`${this.baseUrl}/${id}`);
  }

  // Agregar un nuevo auxiliar
  agregarAuxiliar(aux: Auxiliar): Observable<Auxiliar> {
    return this.http.post<Auxiliar>(`${this.baseUrl}/add`, aux);
  }

  // Editar auxiliar por ID
  editarAuxiliar(id: number, aux: Auxiliar): Observable<Auxiliar> {
    return this.http.put<Auxiliar>(`${this.baseUrl}/${id}`, aux);
  }

  // Eliminar auxiliar por ID
  eliminarAuxiliar(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
