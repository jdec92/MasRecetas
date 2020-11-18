import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GlobalConstants} from '../../../common/global-constants';
import {Observable} from 'rxjs/Observable';
import {Recipe} from '../../../models/recipe';

@Injectable({
  providedIn: 'root'
})

export class WelcomeService {
  constructor(private request: HttpClient) {
  }

  recipesUltimate(numberItems: number): Observable<any> {
    return  this.request.get<Recipe[]>(GlobalConstants.apiUrl + '/ultimate/recipes/' + numberItems);
  }
}
