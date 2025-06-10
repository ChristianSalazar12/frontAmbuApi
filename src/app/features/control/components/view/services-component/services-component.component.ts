import { Component, Input } from '@angular/core';
import { Attention } from '../../../../../models/attention.model';
import { AttentionService } from '../../../../../services/servicesAmbu/attention.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services-component',
  imports: [CommonModule],
  templateUrl: './services-component.component.html',
  styleUrl: './services-component.component.css',
})
export class ServicesComponentComponent {
  attentions: Attention[] = [];
  isLoading = true;

  constructor(private attentionService: AttentionService) {}

  ngOnInit(): void {
    this.attentionService.getAttentions().subscribe({
      next: (data) => {
        this.attentions = data;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error loading attentions:', err);
        this.isLoading = false;
      },
    });
  }
}
