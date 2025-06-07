import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Driver } from '../../models/driver.model';

@Injectable({
  providedIn: 'root',
})
export class DriverService {
  private baseUrl = 'http://localhost:3005/api/admin/driver'; // Ajusta esta URL a tu backend

  constructor(private http: HttpClient) {}

  getDrivers(): Observable<Driver[]> {
    return this.http.get<Driver[]>(this.baseUrl);
  }

  getDriverById(id: number): Observable<Driver> {
    return this.http.get<Driver>(`${this.baseUrl}/${id}`);
  }

  addDriver(driver: Driver): Observable<Driver> {
    return this.http.post<Driver>(`${this.baseUrl}/add`, driver);
  }

  updateDriver(driver: Driver): Observable<Driver> {
    return this.http.put<Driver>(`${this.baseUrl}/${driver.id}`, driver);
  }

  deleteDriver(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
