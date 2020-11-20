import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepPreparationComponent } from '../components/step-preparation.component';

describe('StepPreparationComponent', () => {
  let component: StepPreparationComponent;
  let fixture: ComponentFixture<StepPreparationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepPreparationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepPreparationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
