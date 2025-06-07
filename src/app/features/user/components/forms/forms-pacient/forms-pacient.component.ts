import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Paciente } from '../../../../../models/patient.model';
import { PatientsService } from '../../../../../services/patient/patients.service';

@Component({
  selector: 'app-forms-pacient',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './forms-pacient.component.html',
  styleUrl: './forms-pacient.component.css',
})
export class FormsPacientComponent {
  modo: 'agregar' = 'agregar';
  formulario: FormGroup;
  pacientes: Paciente[] = [];

  constructor(private fb: FormBuilder, private servicio: PatientsService) {
    this.formulario = this.fb.group({
      id: [null],
      name: [''],
      last_name: [''],
      document: [''],
      entidad_salud: [''],
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
    this.servicio.addPatient(datos).subscribe({
      next: (nuevo: Paciente) => {
        this.pacientes.push(nuevo);
        this.formulario.reset();
        this.modo = 'agregar'; // Reinicia el estado del botón
      },
      error: (err: any) => console.error('Error al agregar paciente', err),
    });
  }
}
