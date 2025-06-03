import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalComponentComponent } from './personal-component.component';

describe('PersonalComponentComponent', () => {
  let component: PersonalComponentComponent;
  let fixture: ComponentFixture<PersonalComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonalComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
