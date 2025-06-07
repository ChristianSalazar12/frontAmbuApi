import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Llamada {
  gravedad: 'Alta' | 'Media' | 'Baja';
  lugar: string;
  tiempoEstimado: string;
  tipoReporte: string;
}

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  llamadas: Llamada[] = [
    {
      gravedad: 'Alta',
      lugar: 'Calle 123, Bogotá',
      tiempoEstimado: '5 min',
      tipoReporte: 'Accidente de tráfico',
    },
    {
      gravedad: 'Media',
      lugar: 'Avenida Central, Medellín',
      tiempoEstimado: '12 min',
      tipoReporte: 'Emergencia médica',
    },
    {
      gravedad: 'Baja',
      lugar: 'Carrera 7, Cali',
      tiempoEstimado: '20 min',
      tipoReporte: 'Consulta general',
    },
  ];

  // Opcional: Método para asignar colores según gravedad
  getColor(gravedad: string): string {
    switch (gravedad) {
      case 'Alta':
        return 'border-red-500 bg-red-100';
      case 'Media':
        return 'border-yellow-500 bg-yellow-100';
      case 'Baja':
        return 'border-green-500 bg-green-100';
      default:
        return 'border-gray-300 bg-gray-100';
    }
  }
}
