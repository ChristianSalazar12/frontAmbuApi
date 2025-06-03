import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurnosComponentComponent } from './turnos-component.component';

describe('TurnosComponentComponent', () => {
  let component: TurnosComponentComponent;
  let fixture: ComponentFixture<TurnosComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TurnosComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TurnosComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
