import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ParamedicService {
  private datos = [
    {
      nombre: 'Luis',
      apellido: 'García',
      noMedico: 'PM001',
      contacto: '3101234567',
      noEspecializacion: 'E123',
      categoria: 'Avanzado',
    },
    {
      nombre: 'Luis',
      apellido: 'García',
      noMedico: 'PM002',
      contacto: '3101234567',
      noEspecializacion: 'E123',
      categoria: 'Avanzado',
    },
  ];

  obtenerAmbulancias(): Observable<any[]> {
    return of(this.datos);
  }
}
