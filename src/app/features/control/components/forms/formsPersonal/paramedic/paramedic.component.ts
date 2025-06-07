import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ParamedicService } from '../../../../../../services/personal/paramedic.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-paramedic',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './paramedic.component.html',
  styleUrl: './paramedic.component.css',
})
export class ParamedicComponent implements OnInit {
  modo: 'agregar' | 'editar' | 'eliminar' = 'agregar';
  formulario: FormGroup;
  paramedics: any[] = [];

  constructor(private fb: FormBuilder, private servicio: ParamedicService) {
    this.formulario = this.fb.group({
      id: [null], // nuevo campo para almacenar el ID del backend
      name: [''],
      last_name: [''],
      document: [''],
      tipo_medic: [''],
      no_ci_medic: [''],
      id_capacitation: [''],
      password: ['123456'],
      role: ['USER'],
    });
  }

  ngOnInit(): void {
    this.cargarDatos();
  }

  cargarDatos(): void {
    this.servicio.getParamedics().subscribe((data) => {
      this.paramedics = data;
    });
  }

  ejecutarAccion() {
    const datos = this.formulario.value;

    switch (this.modo) {
      case 'agregar':
        this.servicio.addParamedic(datos).subscribe({
          next: (nuevo) => {
            this.paramedics.push(nuevo);
            this.formulario.reset({ role: 'USER' });
          },
          error: (err) => console.error('Error al agregar paramédico', err),
        });
        break;

      case 'editar':
        const index = this.paramedics.findIndex((p) => p.id === datos.id);
        if (index !== -1) {
          this.servicio.updateParamedic(datos.id, datos).subscribe({
            next: (actualizado) => {
              this.paramedics[index] = actualizado;
              this.formulario.reset({ role: 'USER' });
              this.modo = 'agregar';
            },
            error: (err) => {
              console.error('Error al editar paramédico', err);
            },
          });
        }
        break;

      case 'eliminar':
        const eliminarId = datos.id;
        if (eliminarId) {
          this.servicio.deleteParamedic(eliminarId).subscribe({
            next: () => {
              this.paramedics = this.paramedics.filter(
                (p) => p.id !== eliminarId
              );
              this.formulario.reset({ role: 'USER' });
              this.modo = 'agregar';
            },
            error: (err) => {
              console.error('Error al eliminar paramédico', err);
            },
          });
        }
        break;
    }
  }

  seleccionarParamedico(p: any) {
    this.formulario.setValue({
      id: p.id,
      name: p.name,
      last_name: p.last_name,
      document: p.document,
      tipo_medic: p.tipo_medic,
      no_ci_medic: p.no_ci_medic,
      id_capacitation: p.id_capacitation,
      password: p.password,
      role: p.role || 'USER',
    });
    this.modo = 'editar';
  }
}
