import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsDescriptionComponent } from './forms-description.component';

describe('FormsDescriptionComponent', () => {
  let component: FormsDescriptionComponent;
  let fixture: ComponentFixture<FormsDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsDescriptionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormsDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
