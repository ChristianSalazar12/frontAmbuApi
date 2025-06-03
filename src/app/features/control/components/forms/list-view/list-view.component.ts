import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { AmbulanciaService } from '../../../../../services/ambulance.services';

@Component({
  selector: 'app-list-view',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './list-view.component.html',
  styleUrl: './list-view.component.css',
})
export class ListViewComponent implements OnInit {
  modo: 'agregar' | 'editar' | 'eliminar' = 'agregar';
  formulario: FormGroup;
  ambulancias: any[] = [];

  constructor(private fb: FormBuilder, private servicio: AmbulanciaService) {
    this.formulario = this.fb.group({
      placa: [''],
      conductor: [''],
      paramedico: [''],
      auxiliar: [''],
      estado: [''],
    });
  }

  ngOnInit(): void {
    this.cargarDatos();
  }

  cargarDatos(): void {
    this.servicio.obtenerAmbulancias().subscribe((data) => {
      this.ambulancias = data;
    });
  }

  agregar(): void {
    const nuevaAmbulancia = this.formulario.value;
    this.ambulancias.push(nuevaAmbulancia);
    this.formulario.reset();
  }
  ejecutarAccion() {
    const datos = this.formulario.value;
    switch (this.modo) {
      case 'agregar':
        this.ambulancias.push({ ...datos });
        break;

      case 'editar':
        const indexEditar = this.ambulancias.findIndex(
          (a) => a.placa === datos.placa
        );
        if (indexEditar !== -1) this.ambulancias[indexEditar] = { ...datos };
        break;

      case 'eliminar':
        this.ambulancias = this.ambulancias.filter(
          (a) => a.placa !== datos.placa
        );
        break;
    }
    this.formulario.reset({ estado: 'Activo' });
  }
  seleccionarAmbulancia(amb: any) {
    this.formulario.setValue({
      placa: amb.placa,
      conductor: amb.conductor,
      paramedico: amb.paramedico,
      auxiliar: amb.auxiliar,
      estado: amb.estado,
    });
  }
}
