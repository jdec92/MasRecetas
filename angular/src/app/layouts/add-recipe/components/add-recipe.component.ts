import {Component, Input, OnInit, Output} from '@angular/core';
import {GlobalConstants} from '../../../common/global-constants';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import {StepRecipeComponent} from '../../../core/step-recipe/components/step-recipe.component';


@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {showError: true}
  }]
})
export class AddRecipeComponent implements OnInit {
  routeInfoAddRecipe = GlobalConstants.routeInfoAddRecipe;
  formRecipe: FormGroup;
  formIngredient: FormGroup;
  formPreparation: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.formRecipe = this.formBuilder.group({
      name: ['', Validators.required],
      category: ['', Validators.required],
      image: ['']
    });
    this.formIngredient = this.formBuilder.group({
      ingredients: ['', Validators.required]
    })
    this.formPreparation = this.formBuilder.group({
      preparation: ['', Validators.required]
    });
  }

  submitForms() {
    console.log(this.formRecipe.get('name').value);
    console.log(this.formIngredient.get('ingredients').value);
    console.log(this.formPreparation.get('preparation').value);
  }
}

