import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-dispatches',
  imports: [CommonModule],
  templateUrl: './nav-dispatches.component.html',
  styleUrl: './nav-dispatches.component.css',
})
export class NavDispatchesComponent {
  services = [
    {
      title: 'Service One',
      description1: 'This is the first paragraph describing Service One.',
      description2:
        'This is the second paragraph with more details about Service One.',
    },
    {
      title: 'Service Two',
      description1: 'First paragraph for Service Two.',
      description2: 'Second paragraph for Service Two.',
    },
    {
      title: 'Service Three',
      description1: 'Intro paragraph for Service Three.',
      description2: 'Additional info for Service Three.',
    },
  ];
}
