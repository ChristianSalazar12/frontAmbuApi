import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DriverService } from '../../../../../../services/personal/driver.service';
import { Driver } from '../../../../../../models/driver.model';

@Component({
  selector: 'app-driver',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './driver.component.html',
  styleUrl: './driver.component.css',
})
export class DriverComponent implements OnInit {
  modo: 'agregar' | 'editar' | 'eliminar' = 'agregar';
  formulario: FormGroup;
  drivers: Driver[] = [];

  constructor(private fb: FormBuilder, private servicio: DriverService) {
    this.formulario = this.fb.group({
      name: [''],
      last_name: [''],
      document: [''],
      no_licencia: [''],
      no_fast_driver: [''],
    });
  }

  ngOnInit(): void {
    this.cargarDatos();
  }

  cargarDatos(): void {
    this.servicio.getDrivers().subscribe((data) => {
      this.drivers = data;
    });
  }

  ejecutarAccion() {
    const datos = this.formulario.value;

    switch (this.modo) {
      case 'agregar':
        this.servicio.addDriver(datos).subscribe((nuevo) => {
          this.drivers.push(nuevo);
        });
        break;

      case 'editar':
        const driverToUpdate = this.drivers.find(
          (d) => d.document === datos.document
        );
        if (driverToUpdate) {
          const actualizado = { ...driverToUpdate, ...datos };
          this.servicio.updateDriver(actualizado).subscribe((res) => {
            const index = this.drivers.findIndex(
              (d) => d.id === actualizado.id
            );
            this.drivers[index] = res;
          });
        }
        break;

      case 'eliminar':
        const toDelete = this.drivers.find(
          (d) => d.document === datos.document
        );
        if (toDelete && toDelete.id) {
          this.servicio.deleteDriver(toDelete.id).subscribe(() => {
            this.drivers = this.drivers.filter((d) => d.id !== toDelete.id);
          });
        }
        break;
    }

    this.formulario.reset();
    this.modo = 'agregar';
  }

  seleccionarDriver(d: Driver) {
    this.formulario.setValue({
      name: d.name,
      last_name: d.last_name,
      document: d.document,
      no_licencia: d.no_licencia,
      no_fast_driver: d.no_fast_driver,
    });

    this.modo = 'editar';
  }
}
