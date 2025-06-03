import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-turnos-component',
  imports: [CommonModule],
  templateUrl: './turnos-component.component.html',
  styleUrl: './turnos-component.component.css',
})
export class TurnosComponentComponent {
  fechaActual: string = '';
  horaActual: string = '';
  turnoInicio = '07:00';
  turnoFin = '19:00';

  turnos = [
    {
      ambulancia: 'Ambulancia 1',
      paramedico: 'Carlos Pérez',
      auxiliar: 'Lucía Martínez',
      conductor: 'Andrés López',
    },
    {
      ambulancia: 'Ambulancia 2',
      paramedico: 'Valentina Ruiz',
      auxiliar: 'Julián Cárdenas',
      conductor: 'Sofía Gómez',
    },
  ];

  ngOnInit() {
    const now = new Date();
    this.fechaActual = now.toLocaleDateString();
    this.horaActual = now.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    });
  }
}
