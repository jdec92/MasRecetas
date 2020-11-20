import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepIngredientComponent } from '../components/step-ingredient.component';

describe('StepIngredientComponent', () => {
  let component: StepIngredientComponent;
  let fixture: ComponentFixture<StepIngredientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepIngredientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepIngredientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
