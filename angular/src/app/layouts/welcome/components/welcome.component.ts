import { Component, OnInit } from '@angular/core';

declare interface Recipe {
  id: string;
  img_path: string;
  title: string;
  description: string;
}

export const RECIPES: Recipe[] = [
  { id:'1', img_path: './assets/img/faces/marc.jpg', title: 'Solomillo al Jerez',  description: '1.- Comenzamos poniendo salpimentando...'},
  { id:'2', img_path: './assets/img/faces/marc.jpg', title: 'Brocoli al Curry',  description: '1.- Comenzamos poniendo salpimentando...'},
  { id:'3', img_path: './assets/img/faces/marc.jpg', title: 'Salmón a la Naranja',  description: '1.- Comenzamos poniendo salpimentando...'},

];

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  bestRecipes: any[];

  constructor() { }

  ngOnInit() {
    this.bestRecipes = RECIPES.filter(bestRecipe => bestRecipe);
  }

}
