import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GlobalConstants} from '../../../common/global-constants';
import {Observable} from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})

export class StepIngredientService {
  constructor(private request: HttpClient) {
  }

}
