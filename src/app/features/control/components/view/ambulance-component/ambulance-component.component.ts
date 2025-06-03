import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ListViewComponent } from '../../forms/list-view/list-view.component';

@Component({
  selector: 'app-ambulance-component',
  imports: [CommonModule, ListViewComponent],
  templateUrl: './ambulance-component.component.html',
  styleUrl: './ambulance-component.component.css',
})
export class AmbulanceComponentComponent {
  selectedOption: string = 'list';

  selectOption(option: string) {
    this.selectedOption = option;
  }
}
