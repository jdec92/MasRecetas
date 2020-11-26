import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {GlobalConstants} from '../../../common/global-constants';
import {Recipe} from '../../../models/recipe';

@Injectable({
  providedIn: 'root'
})

export class AddRecipeService {
  constructor(private request: HttpClient) {
  }

  createRecipeAndIngredients(recipeModel: Recipe): Observable<any> {
    return this.request.post<string>(GlobalConstants.apiUrl + GlobalConstants.routeInfoAddRecipe.path, JSON.stringify(recipeModel));
  }
}
