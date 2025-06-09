import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AmbulanciaService } from '../../../../../services/ambulance.services';
import e from 'express';

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
      modelo: ['', Validators.required],
      placa: ['', Validators.required],
      tipo: ['', Validators.required],
      ipsId: [null, Validators.required],
    });
  }
  private ambulanciaService = inject(AmbulanciaService);

  ngOnInit(): void {
    this.cargarDatos();
  }

  cargarDatos(): void {
    this.servicio.getAmbulances().subscribe((data) => {
      this.ambulancias = data;
    });
  }

  ejecutarAccion() {
    const datos = this.formulario.value;
    switch (this.modo) {
      case 'agregar':
        this.servicio.addAmbulance(datos).subscribe({
          next: (res) => {
            this.ambulancias.push(res);
            this.formulario.reset({ estado: 'Activo' });
          },
        });
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
      modelo: amb.modelo,
      placa: amb.placa,
      tipo: amb.tipo,
      ipsId: amb.ipsId,
    });
  }
}
