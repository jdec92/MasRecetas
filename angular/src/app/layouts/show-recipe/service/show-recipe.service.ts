import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {GlobalConstants} from '../../../common/global-constants';
import {Recipe} from '../../../models/recipe';

@Injectable({
  providedIn: 'root'
})

export class ShowRecipeService {
  constructor(private request: HttpClient) {
  }

  getRecipe(idRecipe): Observable<any> {
    return this.request.get<Recipe>(GlobalConstants.apiUrl + '' + GlobalConstants.routeInfoRecipe.path + '/' + idRecipe);
  }
}
