import { CommonModule, NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-nav-options',
  imports: [CommonModule, NgClass],
  templateUrl: './nav-options.component.html',
  styleUrl: './nav-options.component.css',
})
export class NavOptionsComponent {
  @Output() onViewChange = new EventEmitter<string>();
  @Input() selectedView: string = ''; // Valor por defecto

  setView(view: string) {
    this.onViewChange.emit(view);
  }
  // Valor por defecto
}
