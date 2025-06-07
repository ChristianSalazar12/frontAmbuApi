import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { Turno } from '../../models/turno.model';
import { Ambulance } from '../../models/ambulances.model';

@Injectable({
  providedIn: 'root',
})
export class TurnoService {
  private baseUrl = 'http://localhost:3005/api/admin';

  constructor(private http: HttpClient) {}

  obtenerTurnos(): Observable<Turno[]> {
    return this.http.get<Turno[]>(`${this.baseUrl}/shift`);
  }

  obtenerTurnosActuales(): Observable<Turno[]> {
    return this.http.get<Turno[]>(`${this.baseUrl}/shift/currents`);
  }

  agregarTurno(turno: Turno): Observable<Turno> {
    return this.http.post<Turno>(`${this.baseUrl}/shift/add`, turno);
  }

  editarTurno(id: number, turno: Turno): Observable<Turno> {
    return this.http.put<Turno>(`${this.baseUrl}/shift/${id}`, turno);
  }

  eliminarTurno(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/shift/${id}`);
  }

  // Funciones para obtener detalles
  getParamedicById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/paramedic/${id}`);
  }

  getAuxiliarById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/assistant/${id}`);
  }

  getDriverById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/driver/${id}`);
  }

  getAmbulanceById(id: number): Observable<Ambulance> {
    return this.http.get<Ambulance>(`${this.baseUrl}/ambulance/${id}`);
  }
}
