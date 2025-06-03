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
      nombre: [''],
      apellido: [''],
      noMedico: [''],
      contacto: [''],
      noEspecializacion: [''],
      categoria: [''],
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
          (p) => p.noMedico === datos.noMedico
        );
        if (indexEditar !== -1) this.paramedics[indexEditar] = { ...datos };
        break;

      case 'eliminar':
        this.paramedics = this.paramedics.filter(
          (p) => p.noMedico !== datos.noMedico
        );
        break;
    }

    this.formulario.reset();
  }

  seleccionarParamedico(p: any) {
    this.formulario.setValue({
      nombre: p.nombre,
      apellido: p.apellido,
      noMedico: p.noMedico,
      contacto: p.contacto,
      noEspecializacion: p.noEspecializacion,
      categoria: p.categoria,
    });

    this.modo = 'editar';
  }
}
