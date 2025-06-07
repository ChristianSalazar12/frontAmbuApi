import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Paramedic } from '../../models/paramedic.model';

@Injectable({
  providedIn: 'root',
})
export class ParamedicService {
  private apiUrl = 'http://localhost:3005/api/admin/paramedic'; // API URL

  constructor(private http: HttpClient) {}

  getParamedics(): Observable<Paramedic[]> {
    return this.http.get<Paramedic[]>(this.apiUrl);
  }

  getParamedicById(id: number): Observable<Paramedic> {
    return this.http.get<Paramedic>(`${this.apiUrl}/${id}`);
  }

  addParamedic(data: Paramedic): Observable<Paramedic> {
    return this.http.post<Paramedic>(`${this.apiUrl}/add`, data);
  }

  updateParamedic(id: string, data: Paramedic): Observable<Paramedic> {
    return this.http.put<Paramedic>(`${this.apiUrl}/${id}`, data);
  }

  deleteParamedic(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
