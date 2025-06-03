import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { driverService } from '../../../../../../services/personal/driver.service';

@Component({
  selector: 'app-driver',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './driver.component.html',
  styleUrl: './driver.component.css',
})
export class DriverComponent {
  modo: 'agregar' | 'editar' | 'eliminar' = 'agregar';
  formulario: FormGroup;
  paramedics: any[] = [];

  constructor(private fb: FormBuilder, private servicio: driverService) {
    this.formulario = this.fb.group({
      nombre: [''],
      apellido: [''],
      noLicencia: [''],
      telefono: [''],
      noCurso: [''],
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
      noLicencia: p.noLicencia,
      telefono: p.telefono,
      noCurso: p.noCurso,
    });

    this.modo = 'editar';
  }
}
