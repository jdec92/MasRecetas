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
      nameCtrl: ['', Validators.required],
      categoryCtrl: ['', Validators.required]
    });
    this.formIngredient = this.formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.formPreparation = this.formBuilder.group({
      threeCtrl: ['', Validators.required]
    });
  }
}

