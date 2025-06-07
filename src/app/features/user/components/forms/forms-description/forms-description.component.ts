import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Description } from '../../../../../models/description.model';
import { DescriptionsService } from '../../../../../services/servicesAmbu/description.service';

@Component({
  selector: 'app-forms-description',
  imports: [ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './forms-description.component.html',
  styleUrl: './forms-description.component.css',
})
export class FormsDescriptionComponent {
  description: Description = {
    description: '',
    type_context: 'CLINICO',
    implicados: '',
  };

  constructor(private descriptionsService: DescriptionsService) {}

  onSubmit(): void {
    this.descriptionsService.addDescription(this.description).subscribe({
      next: (res) => {
        alert('Descripción agregada con éxito');
        this.description = {
          description: '',
          type_context: 'CLINICO',
          implicados: '',
        };
      },
      error: (err) => {
        console.error('Error al agregar la descripción', err);
      },
    });
  }
}
