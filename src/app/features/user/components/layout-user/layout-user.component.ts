import { Component } from '@angular/core';
import { ServicesAmbulanceComponent } from '../view/services-ambulance/services-ambulance.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { HeaderUserComponent } from '../header-user/header-user.component';
import { ServicesComponentComponent } from '../../../control/components/view/services-component/services-component.component';

@Component({
  selector: 'app-layout-user',
  imports: [SidebarComponent, HeaderUserComponent, ServicesAmbulanceComponent],
  templateUrl: './layout-user.component.html',
  styleUrl: './layout-user.component.css',
})
export class LayoutUserComponent {}
