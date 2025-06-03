import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class driverService {
  private datos = [
    {
      nombre: 'Luis',
      apellido: 'García',
      noAuxiliar: 'PM001',
      contacto: '3101234567',
      noEspecializacion: 'E123',
    },
    {
      nombre: 'Luis',
      apellido: 'García',
      noAuxiliar: 'PM002',
      contacto: '3101234567',
      noEspecializacion: 'E123',
    },
  ];

  obtenerAmbulancias(): Observable<any[]> {
    return of(this.datos);
  }
}
