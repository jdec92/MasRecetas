import {Component, OnInit} from '@angular/core';
import {GlobalConstants} from '../../../common/global-constants';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import {Recipe} from '../../../models/recipe';
import {MatDialog} from '@angular/material/dialog';
import {DialogComponent} from '../../../core/dialog/components/dialog.component';
import {AddRecipeService} from '../service/add-recipe.service';
import {DialogData} from '../../../models/dialog-data';
import {Router} from '@angular/router';

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

  constructor(private formBuilder: FormBuilder, public service: AddRecipeService,
              public dialog: MatDialog, private route: Router) {
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
    if (this.formRecipe.valid && this.formIngredient.valid && this.formPreparation.valid) {
      this.service.createRecipeAndIngredients(this.createModelRequest()).subscribe(
        data => {
          this.route.navigate(['/']);
        }, error => {
          this.openDialog('Error al Crear la Receta', 'Por favor vuelva a intentar crearla');
        }
      );
    } else {
      this.openDialog('Datos Incompletos', 'Por favor revise los pasos que están marcados en rojo');
    }
  }

  openDialog(title: string, content: string) {
    const data: DialogData = {
      title: title,
      content: content,
      button: 'Cerrar'
    };
    this.dialog.open(DialogComponent, {data: data});
  }

  createModelRequest(): Recipe {
    return {
      id: 0,
      title: this.formRecipe.get('name').value,
      imagePath: this.formRecipe.get('image').value,
      category: this.formRecipe.get('category').value,
      preparation: this.formPreparation.get('preparation').value,
      ingredients: JSON.parse(this.formIngredient.get('ingredients').value)
    }
  }
}

