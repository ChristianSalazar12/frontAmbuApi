import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AmbulanciaService {
  private datos = [
    {
      placa: 'ABC123',
      conductor: 'Juan Pérez',
      paramedico: 'Luis Ramos',
      auxiliar: 'Ana Torres',
      estado: 'Activo',
    },
    {
      placa: 'XYZ789',
      conductor: 'Carlos Gómez',
      paramedico: 'María Díaz',
      auxiliar: 'Pedro Ruiz',
      estado: 'Libre',
    },
  ];

  obtenerAmbulancias(): Observable<any[]> {
    return of(this.datos);
  }
}
