import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsPacientComponent } from './forms-pacient.component';

describe('FormsPacientComponent', () => {
  let component: FormsPacientComponent;
  let fixture: ComponentFixture<FormsPacientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsPacientComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormsPacientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
