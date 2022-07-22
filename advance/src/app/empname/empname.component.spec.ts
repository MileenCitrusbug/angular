import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpnameComponent } from './empname.component';

describe('EmpnameComponent', () => {
  let component: EmpnameComponent;
  let fixture: ComponentFixture<EmpnameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpnameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpnameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
