import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PatientsService } from '../../../../../services/patients.service';
import { Paciente } from '../../../../../models/patients.model';

@Component({
  selector: 'app-services-component',
  templateUrl: './services-component.component.html',
  styleUrl: './services-component.component.css',
  imports: [ReactiveFormsModule, CommonModule],
})
export class ServicesComponentComponent implements OnInit {
  modo: 'agregar' | 'editar' | 'eliminar' = 'agregar';
  formulario: FormGroup;
  pacientes: Paciente[] = [];
  pacienteSeleccionado: Paciente | null = null;

  constructor(private fb: FormBuilder, private servicio: PatientsService) {
    this.formulario = this.fb.group({
      id: [null],
      name: [''],
      last_name: [''],
      document: [''],
      entidad_salud: ['']
    });
  }

  ngOnInit(): void {
    this.cargarDatos();
  }

  cargarDatos(): void {
    this.servicio.getPatients().subscribe((data: Paciente[]) => {
      this.pacientes = data;
    });
  }

  ejecutarAccion() {
    const datos = this.formulario.value;
    switch (this.modo) {
      case 'agregar':
        this.servicio.addPatient(datos).subscribe({
          next: (nuevo: Paciente) => {
            this.pacientes.push(nuevo);
            this.formulario.reset();
          },
          error: (err: any) => console.error('Error al agregar paciente', err),
        });
        break;
      case 'editar':
        const index = this.pacientes.findIndex((p) => p.id === datos.id);
        if (index !== -1) {
          this.servicio.updatePatient(datos.id, datos).subscribe({
            next: (actualizado: Paciente) => {
              this.pacientes[index] = actualizado;
              this.formulario.reset();
              this.modo = 'agregar';
              this.pacienteSeleccionado = null;
            },
            error: (err: any) => {
              console.error('Error al editar paciente', err);
            },
          });
        }
        break;
      case 'eliminar':
        const eliminarId = datos.id;
        if (eliminarId) {
          this.servicio.deletePatient(eliminarId).subscribe({
            next: () => {
              this.pacientes = this.pacientes.filter((p) => p.id !== eliminarId);
              this.formulario.reset();
              this.modo = 'agregar';
              this.pacienteSeleccionado = null;
            },
            error: (err: any) => {
              console.error('Error al eliminar paciente', err);
            },
          });
        }
        break;
    }
  }

  seleccionarPaciente(p: Paciente) {
    this.formulario.setValue({
      id: p.id || null,
      name: p.name,
      last_name: p.last_name,
      document: p.document,
      entidad_salud: p.entidad_salud
    });
    this.modo = 'editar';
    this.pacienteSeleccionado = p;
  }
}
