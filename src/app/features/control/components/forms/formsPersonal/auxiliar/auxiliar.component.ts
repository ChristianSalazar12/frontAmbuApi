import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuxiliarService } from '../../../../../../services/personal/auxiliar.service';

@Component({
  selector: 'app-auxiliar',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './auxiliar.component.html',
  styleUrl: './auxiliar.component.css',
})
export class AuxiliarComponent implements OnInit {
  modo: 'agregar' | 'editar' | 'eliminar' = 'agregar';
  formulario: FormGroup;
  paramedics: any[] = [];

  constructor(private fb: FormBuilder, private servicio: AuxiliarService) {
    this.formulario = this.fb.group({
      nombre: [''],
      apellido: [''],
      noAuxiliar: [''],
      contacto: [''],
      noEspecializacion: [''],
    });
  }

  ngOnInit(): void {
    this.cargarDatos();
  }

  cargarDatos(): void {
    this.servicio.obtenerAmbulancias().subscribe((data) => {
      this.paramedics = data;
    });
  }

  agregar(): void {
    const nuevoParamedic = this.formulario.value;
    this.paramedics.push(nuevoParamedic);
    this.formulario.reset();
    console.log(this.paramedics);
  }

  ejecutarAccion() {
    const datos = this.formulario.value;

    switch (this.modo) {
      case 'agregar':
        this.paramedics.push({ ...datos });
        break;

      case 'editar':
        const indexEditar = this.paramedics.findIndex(
          (p) => p.noAuxiliar === datos.noAuxiliar
        );
        if (indexEditar !== -1) this.paramedics[indexEditar] = { ...datos };
        break;

      case 'eliminar':
        this.paramedics = this.paramedics.filter(
          (p) => p.noAuxiliar !== datos.noAuxiliar
        );
        break;
    }

    this.formulario.reset();
  }

  seleccionarParamedico(p: any) {
    this.formulario.setValue({
      nombre: p.nombre,
      apellido: p.apellido,
      noAuxiliar: p.noAuxiliar,
      contacto: p.contacto,
      noEspecializacion: p.noEspecializacion,
    });

    this.modo = 'editar';
  }
}
