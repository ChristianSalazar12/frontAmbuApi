import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TurnoService } from '../../../../../services/shift/shift.service';
import { Turno } from '../../../../../models/turno.model';
import { forkJoin, map } from 'rxjs';

@Component({
  selector: 'app-turnos-component',
  imports: [CommonModule],
  templateUrl: './turnos-component.component.html',
  styleUrl: './turnos-component.component.css',
})
export class TurnosComponentComponent {
  fechaActual: string = '';
  horaActual: string = '';
  turnoInicio: string = '';
  turnoFin: string = '';
  turnos: any[] = [];

  constructor(private turnoService: TurnoService) {}

  ngOnInit(): void {
    this.actualizarFechaYHora();
    this.cargarTurnos();
  }

  cargarTurnos() {
    this.turnoService.obtenerTurnos().subscribe((turnos: Turno[]) => {
      const detalles$ = turnos.map((turno) => {
        return forkJoin({
          paramedico: this.turnoService.getParamedicById(turno.paramedicId),
          auxiliar: this.turnoService.getAuxiliarById(turno.auxiliarId),
          conductor: this.turnoService.getDriverById(turno.conductorId),
          ambulancia: this.turnoService.getAmbulanceById(turno.ambulanciaId),
        }).pipe(
          map((detalles) => ({
            ...turno,
            paramedico: detalles.paramedico,
            auxiliar: detalles.auxiliar,
            conductor: detalles.conductor,
            ambulancia: detalles.ambulancia,
          }))
        );
      });

      forkJoin(detalles$).subscribe((detallesCompletos) => {
        this.turnos = detallesCompletos;
      });
    });
  }
  actualizarFechaYHora() {
    const ahora = new Date();
    this.fechaActual = ahora.toLocaleDateString();
    this.horaActual = ahora.toLocaleTimeString();

    // Puedes personalizar esto para reflejar el turno real
    this.turnoInicio = '08:00 AM';
    this.turnoFin = '04:00 PM';
  }
}
