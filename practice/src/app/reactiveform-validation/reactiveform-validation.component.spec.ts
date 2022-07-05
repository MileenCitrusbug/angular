import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveformValidationComponent } from './reactiveform-validation.component';

describe('ReactiveformValidationComponent', () => {
  let component: ReactiveformValidationComponent;
  let fixture: ComponentFixture<ReactiveformValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveformValidationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveformValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
