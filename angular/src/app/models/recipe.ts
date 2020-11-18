import {Ingredient} from './ingredient';

export interface Recipe {
  id: number;
  title: string;
  image_path: string;
  category: number;
  preparation: string;
  ingredients: Ingredient[];
}
