import {Ingredient} from './ingredient';

export interface Recipe {
  id: number;
  title: string;
  imagePath: string;
  category: number;
  preparation: string;
  ingredients: Ingredient[];
}
