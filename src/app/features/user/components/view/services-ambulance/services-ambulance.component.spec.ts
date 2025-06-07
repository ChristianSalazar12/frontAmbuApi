import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesAmbulanceComponent } from './services-ambulance.component';

describe('ServicesAmbulanceComponent', () => {
  let component: ServicesAmbulanceComponent;
  let fixture: ComponentFixture<ServicesAmbulanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicesAmbulanceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicesAmbulanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
