import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingEmpleadosComponent } from './landing-empleados.component';

describe('LandingEmpleadosComponent', () => {
  let component: LandingEmpleadosComponent;
  let fixture: ComponentFixture<LandingEmpleadosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LandingEmpleadosComponent]
    });
    fixture = TestBed.createComponent(LandingEmpleadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
