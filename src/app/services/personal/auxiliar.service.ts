import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuxiliarService {
  private datos = [
    {
      nombre: 'Luis',
      apellido: 'García',
      noLicencia: 'PM001',
      contacto: '3101234567',
      noCurso: 'E123',
    },
    {
      nombre: 'Luis',
      apellido: 'García',
      noLicencia: 'PM002',
      contacto: '3101234567',
      noCurso: 'E123',
    },
  ];

  obtenerAmbulancias(): Observable<any[]> {
    return of(this.datos);
  }
}
