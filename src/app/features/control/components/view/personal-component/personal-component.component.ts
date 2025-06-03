import { Component } from '@angular/core';
import { ParamedicComponent } from '../../forms/formsPersonal/paramedic/paramedic.component';
import { AuxiliarComponent } from '../../forms/formsPersonal/auxiliar/auxiliar.component';
import { DriverComponent } from '../../forms/formsPersonal/driver/driver.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-personal-component',
  imports: [
    ParamedicComponent,
    AuxiliarComponent,
    DriverComponent,
    CommonModule,
  ],
  templateUrl: './personal-component.component.html',
  styleUrl: './personal-component.component.css',
})
export class PersonalComponentComponent {
  selectedOption: string = 'list';

  selectOption(option: string) {
    this.selectedOption = option;
  }
}
