import { Component } from '@angular/core';
import { Attention } from '../../../../../models/attention.model';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AttentionService } from '../../../../../services/servicesAmbu/attention.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services-ambulance',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './services-ambulance.component.html',
  styleUrl: './services-ambulance.component.css',
})
export class ServicesAmbulanceComponent {
  attentionForm!: FormGroup;
  submitting: boolean = false;
  errorMsg = '';
  arrivedSet = false;

  constructor(
    private fb: FormBuilder,
    private attentionService: AttentionService
  ) {}

  ngOnInit() {
    this.submitting = true;
    const nowISO = new Date().toISOString().slice(0, 16); // formato yyyy-MM-ddTHH:mm para datetime-local

    this.attentionForm = this.fb.group({
      date: [{ value: nowISO, disabled: true }, Validators.required],
      status: ['PENDIENTE', Validators.required],
      time_arrived: ['', Validators.required],
      time_finish: ['', Validators.required],
      code_start: [
        { value: this.generateCodeStart(), disabled: true },
        Validators.required,
      ],
      code_end: [
        { value: this.generateCodeEnd(), disabled: true },
        Validators.required,
      ],
      place_accident: ['', Validators.required],
      nro_informe: [
        { value: this.generateNroInforme(), disabled: true },
        Validators.required,
      ],
      id_turno: ['', [Validators.required, Validators.min(1)]],
      id_paciente: ['', [Validators.required, Validators.min(1)]],
      id_descripcion: ['', [Validators.required, Validators.min(1)]],
    });
  }

  generateCodeStart(): string {
    // Ejemplo: CS-124 + timestamp o contador
    return 'CS-' + Date.now().toString().slice(-4);
  }

  generateCodeEnd(): string {
    // Ejemplo: CE-455 + timestamp o contador
    return 'CE-' + Date.now().toString().slice(-4);
  }

  generateNroInforme(): string {
    // Ejemplo: INF-98768 + timestamp o contador
    return 'INF-' + Date.now().toString().slice(-5);
  }

  onSubmit() {
    if (this.attentionForm.invalid) {
      this.errorMsg = 'Please fill all required fields correctly.';
      return;
    }

    this.submitting = true;
    const newAttention: Attention = this.attentionForm.value;

    this.attentionService.addAttention(newAttention).subscribe({
      next: (response) => {
        this.submitting = false;
        this.attentionForm.reset({ status: 'PENDIENTE' });
        this.errorMsg = '';
        alert('Attention added successfully!');
      },
      error: (err) => {
        this.submitting = false;
        this.errorMsg = 'Error adding attention. Please try again.';
        console.error(err);
      },
    });
  }
  setTimeNow(type: 'arrived' | 'finish') {
    const now = new Date();
    const localISOTime = new Date(
      now.getTime() - now.getTimezoneOffset() * 60000
    )
      .toISOString()
      .slice(0, 16); // datetime-local requiere formato yyyy-MM-ddTHH:mm

    if (type === 'arrived') {
      this.attentionForm.get('time_arrived')?.setValue(localISOTime);
    } else if (type === 'finish') {
      this.attentionForm.get('time_finish')?.setValue(localISOTime);
    }
  }
}
