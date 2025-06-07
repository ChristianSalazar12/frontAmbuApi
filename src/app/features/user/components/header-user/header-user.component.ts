import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header-user',
  imports: [],
  templateUrl: './header-user.component.html',
  styleUrl: './header-user.component.css',
})
export class HeaderUserComponent {
  @Input() nombreAmbulancia: string = 'Ambulancia Alfa';
  @Input() numeroReferencia: string = 'REF-123456';
}
