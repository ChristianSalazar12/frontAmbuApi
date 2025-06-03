import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ListViewComponent } from '../../forms/list-view/list-view.component';
import { AddViewComponent } from '../../forms/add-view/add-view.component';
import { EditViewComponent } from '../../forms/edit-view/edit-view.component';
import { DeleteViewComponent } from '../../forms/delete-view/delete-view.component';

@Component({
  selector: 'app-ambulance-component',
  imports: [
    CommonModule,
    ListViewComponent,
    AddViewComponent,
    EditViewComponent,
    DeleteViewComponent,
  ],
  templateUrl: './ambulance-component.component.html',
  styleUrl: './ambulance-component.component.css',
})
export class AmbulanceComponentComponent {
  selectedOption: string = 'list';

  selectOption(option: string) {
    this.selectedOption = option;
  }
}
