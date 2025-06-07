import { Routes } from '@angular/router';
import { LayoutComponent } from './features/control/layout/layout.component';
import { LoginComponent } from './auth/pages/login/login.component';
import { ServicesAmbulanceComponent } from './features/user/components/view/services-ambulance/services-ambulance.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'home',
    component: LayoutComponent,
  },
  {
    path: 'services',
    component: ServicesAmbulanceComponent,
  },
];
