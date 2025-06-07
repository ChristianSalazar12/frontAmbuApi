import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuxiliarService } from '../../../../../../services/personal/auxiliar.service';
import { Auxiliar } from '../../../../../../models/Auxiliar.model';

@Component({
  selector: 'app-auxiliar',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './auxiliar.component.html',
  styleUrl: './auxiliar.component.css',
})
export class AuxiliarComponent implements OnInit {
  modo: 'agregar' | 'editar' | 'eliminar' = 'agregar';
  formulario: FormGroup;
  auxiliares: Auxiliar[] = [];
  auxiliarSeleccionado: Auxiliar | null = null;

  constructor(private fb: FormBuilder, private servicio: AuxiliarService) {
    this.formulario = this.fb.group({
      name: [''],
      last_name: [''],
      document: [''],
      no_ci_auxiliar: [''],
      no_ci_soporte_vital: [''],
      password: ['123456'],
      role: ['USER'],
    });
  }

  ngOnInit(): void {
    this.cargarDatos();
  }

  cargarDatos(): void {
    this.servicio.obtenerAuxiliares().subscribe((data) => {
      this.auxiliares = data;
    });
  }

  ejecutarAccion() {
    const datos: Auxiliar = this.formulario.value;

    switch (this.modo) {
      case 'agregar':
        this.servicio.agregarAuxiliar(datos).subscribe((nuevo) => {
          this.auxiliares.push(nuevo);
          this.formulario.reset();
        });
        break;

      case 'editar':
        if (this.auxiliarSeleccionado?.id) {
          this.servicio
            .editarAuxiliar(this.auxiliarSeleccionado.id, datos)
            .subscribe((editado) => {
              const index = this.auxiliares.findIndex(
                (a) => a.id === this.auxiliarSeleccionado?.id
              );
              if (index !== -1) this.auxiliares[index] = editado;
              this.formulario.reset();
              this.auxiliarSeleccionado = null;
            });
        }
        break;

      case 'eliminar':
        if (this.auxiliarSeleccionado?.id) {
          this.servicio
            .eliminarAuxiliar(this.auxiliarSeleccionado.id)
            .subscribe(() => {
              this.auxiliares = this.auxiliares.filter(
                (a) => a.id !== this.auxiliarSeleccionado?.id
              );
              this.formulario.reset();
              this.auxiliarSeleccionado = null;
            });
        }
        break;
    }
  }

  seleccionarParamedico(a: Auxiliar) {
    this.formulario.setValue({
      name: a.name,
      last_name: a.last_name,
      document: a.document,
      no_ci_auxiliar: a.no_ci_auxiliar,
      no_ci_soporte_vital: a.no_ci_soporte_vital,
      password: a.password,
      role: a.role,
    });

    this.auxiliarSeleccionado = a;
    this.modo = 'editar';
  }
}
