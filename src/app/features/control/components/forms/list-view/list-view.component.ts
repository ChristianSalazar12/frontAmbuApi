import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-list-view',
  imports: [CommonModule],
  templateUrl: './list-view.component.html',
  styleUrl: './list-view.component.css',
})
export class ListViewComponent {
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
