import { Component, Input } from '@angular/core';
import { HomeComponentComponent } from '../components/view/home-component/home-component.component';
import { AmbulanceComponentComponent } from '../components/view/ambulance-component/ambulance-component.component';
import { PersonalComponentComponent } from '../components/view/personal-component/personal-component.component';
import { ServicesComponentComponent } from '../components/view/services-component/services-component.component';
import { TurnosComponentComponent } from '../components/view/turnos-component/turnos-component.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [
    HomeComponentComponent,
    AmbulanceComponentComponent,
    PersonalComponentComponent,
    ServicesComponentComponent,
    TurnosComponentComponent,
    CommonModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  @Input() selectedView!: string;
}
