import {Component, OnInit} from '@angular/core';
import {WelcomeService} from '../service/welcome.service';
import {Recipe} from '../../../models/recipe';
import {GlobalConstants} from '../../../common/global-constants';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  bestRecipes: Recipe[];
  urlAddRecipe: string = GlobalConstants.routeInfoAddRecipe.path;
  urlRecipe: string = GlobalConstants.routeInfoRecipe.path;

  constructor(public service: WelcomeService) {
  }

  ngOnInit() {
    this.service.recipesUltimate(3).subscribe((data: Recipe[]) => {
             this.bestRecipes = data;
      },
      err => {
        console.log(err);
      });
  }

}
