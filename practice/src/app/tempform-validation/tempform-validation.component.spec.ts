import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempformValidationComponent } from './tempform-validation.component';

describe('TempformValidationComponent', () => {
  let component: TempformValidationComponent;
  let fixture: ComponentFixture<TempformValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TempformValidationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TempformValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
