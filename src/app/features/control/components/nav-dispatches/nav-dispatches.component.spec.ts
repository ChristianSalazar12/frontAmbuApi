import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavDispatchesComponent } from './nav-dispatches.component';

describe('NavDispatchesComponent', () => {
  let component: NavDispatchesComponent;
  let fixture: ComponentFixture<NavDispatchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavDispatchesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavDispatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
