import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { AttentionService } from '../../../../services/servicesAmbu/attention.service';
import { Attention } from '../../../../models/attention.model';

@Component({
  selector: 'app-nav-dispatches',
  imports: [CommonModule],
  templateUrl: './nav-dispatches.component.html',
  styleUrl: './nav-dispatches.component.css',
})
export class NavDispatchesComponent implements OnInit {
  attentionService = inject(AttentionService);
  services: {
    title: string;
    description1: string;
    description2: string;
    description3: string;
  }[] = [];

  ngOnInit() {
    this.attentionService.getAttentions().subscribe({
      next: (data: Attention[]) => {
        this.services = data.map((att) => ({
          title: att.nro_informe,
          description1: new Date(att.date).toLocaleDateString(), // Formatear fecha
          description2: att.status,
          description3: att.place_accident,
        }));
      },
      error: (err) => console.error('Error loading attentions', err),
    });
  }
}
