import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ambulance } from '../models/ambulances.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AmbulanciaService {
  private apiUrl = 'http://localhost:3005/api/admin/ambulance'; // URL de la API
  constructor(private http: HttpClient) {}

  getAmbulances(): Observable<Ambulance[]> {
    return this.http.get<Ambulance[]>(this.apiUrl);
  }

  getAmbulanceById(id: number): Observable<Ambulance> {
    return this.http.get<Ambulance>(`${this.apiUrl}/${id}`);
  }

  addAmbulance(data: Ambulance): Observable<Ambulance> {
    return this.http.post<Ambulance>(`${this.apiUrl}/add`, data);
  }
  updateAmbulance(id: string, data: Ambulance): Observable<Ambulance> {
    return this.http.put<Ambulance>(`${this.apiUrl}/${id}`, data);
  }
  deleteAmbulance(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
