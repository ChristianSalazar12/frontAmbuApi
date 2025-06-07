// src/app/services/description/descriptions.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Description } from '../../models/description.model';

@Injectable({
  providedIn: 'root',
})
export class DescriptionsService {
  private apiUrl = 'http://localhost:3005/api/user/description';

  constructor(private http: HttpClient) {}

  addDescription(data: Description): Observable<Description> {
    return this.http.post<Description>(`${this.apiUrl}/add`, data);
  }

  getDescriptions(): Observable<Description[]> {
    return this.http.get<Description[]>(this.apiUrl);
  }
}
