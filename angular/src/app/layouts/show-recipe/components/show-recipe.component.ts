import {Component, OnInit} from '@angular/core';
import {ShowRecipeService} from '../service/show-recipe.service';
import {ActivatedRoute} from '@angular/router';
import {Recipe} from '../../../models/recipe';
import {GlobalConstants} from '../../../common/global-constants';
import {Select} from '../../../models/select';

@Component({
  selector: 'app-show-recipe',
  templateUrl: './show-recipe.component.html',
  styleUrls: ['./show-recipe.component.css'],
})
export class ShowRecipeComponent implements OnInit {
  idRecipe: string;
  recipe: Recipe;
  category: Select;
  measureIngredient: Select[] = GlobalConstants.getMeasureIngredient;
  urlApi: string = GlobalConstants.apiUrl;
  imageDefault: Select = GlobalConstants.imageDefault;
  numberDiner: number = 1;

  constructor(private activateRoute: ActivatedRoute, public service: ShowRecipeService) {
    this.idRecipe = this.activateRoute.snapshot.params.id;
  }

  ngOnInit() {
    this.service.getRecipe(this.idRecipe).subscribe(
      recipe => {
        this.recipe = recipe;
        this.category = GlobalConstants.getCategoryRecipe.find(item => item.value === recipe.category);
      }, error => {
        console.log(error);
      }
    )
  }

  updateNumberDiner(event: any){
    this.numberDiner = event.target.value;
  }
}

