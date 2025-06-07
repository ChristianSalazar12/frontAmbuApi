import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Paciente } from '../models/patients.model';

@Injectable({
  providedIn: 'root',
})
export class PatientsService {
  private apiUrl = 'http://localhost:3005/api/user/patient'; // API URL

  constructor(private http: HttpClient) {}

  getPatients(): Observable<Paciente[]> {
    return this.http.get<Paciente[]>(this.apiUrl);
  }

  getPatientById(id: number): Observable<Paciente> {
    return this.http.get<Paciente>(`${this.apiUrl}/${id}`);
  }

  addPatient(data: Paciente): Observable<Paciente> {
    return this.http.post<Paciente>(`${this.apiUrl}/add`, data);
  }

  updatePatient(id: string, data: Paciente): Observable<Paciente> {
    return this.http.put<Paciente>(`${this.apiUrl}/${id}`, data);
  }

  deletePatient(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
