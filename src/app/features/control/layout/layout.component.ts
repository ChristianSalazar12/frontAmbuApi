import { Component } from '@angular/core';
import { NavDispatchesComponent } from '../components/nav-dispatches/nav-dispatches.component';
import { HeaderComponent } from '../components/header/header.component';
import { HomeComponent } from '../home/home.component';
import { NavOptionsComponent } from '../components/nav-options/nav-options.component';

@Component({
  selector: 'app-layout',
  imports: [
    NavDispatchesComponent,
    HeaderComponent,
    HomeComponent,
    NavOptionsComponent,
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
})
export class LayoutComponent {
  selectedView: string = 'home'; // Valor por defecto

  changeSelectedView(view: string) {
    this.selectedView = view;
  }
}
