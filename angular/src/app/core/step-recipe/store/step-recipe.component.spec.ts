import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepRecipeComponent } from '../components/step-recipe.component';

describe('StepRecipeComponent', () => {
  let component: StepRecipeComponent;
  let fixture: ComponentFixture<StepRecipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepRecipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
