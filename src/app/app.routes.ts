import { GuardsCheckEnd, Routes } from '@angular/router';
import { LayoutComponent } from './features/control/layout/layout.component';
import { LoginComponent } from './auth/pages/login/login.component';
import { ServicesAmbulanceComponent } from './features/user/components/view/services-ambulance/services-ambulance.component';
import { LayoutUserComponent } from './features/user/components/layout-user/layout-user.component';
import { WelcomeComponent } from './features/welcome/welcome/welcome.component';
import { authGuard } from './auth/guards/auth.guard';
import { GoogleCallbackComponent } from './auth/pages/google-callback/google-callback.component';

export const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'home',
    component: LayoutComponent,
    canActivate: [authGuard],
  },
  {
    path: 'services',
    component: ServicesAmbulanceComponent,
    canActivate: [authGuard],
  },
  {
    path: 'service',
    component: LayoutUserComponent,
  },
  {
    path: 'login/callback',
    component: GoogleCallbackComponent,
  },
];
