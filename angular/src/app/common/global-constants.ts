import {RouteInfo} from '../models/routeInfo';
import {Select} from '../models/select';

export class GlobalConstants {
  public static apiUrl: string = 'http://localhost/api';
  public static apiEditRecipe: string = '/edit';
  public static showUltimateRecipe: string = '/ultimate/recipes/';

  public static routeInfoSearch: RouteInfo = {
    path: '/search', title: 'Buscar Recetas', icon: 'person_search'
  };

  public static routeInfoCategory: RouteInfo = {
    path: '/category', title: 'Recetas por Genero', icon: 'dashboard'
  };

  public static routeInfoRecipe: RouteInfo = {
    path: '/show', title: 'Editar una Receta', icon: 'playlist_add'
  };

  public static routeInfoAddRecipe: RouteInfo = {
    path: '/add', title: 'Crear una Receta', icon: 'playlist_add'
  };

  public static getRouteInfo: RouteInfo[] = [
    GlobalConstants.routeInfoCategory,
    GlobalConstants.routeInfoSearch,
    GlobalConstants.routeInfoAddRecipe
  ];

  public static getCategoryRecipe: Select[] = [
    {value: "1", viewValue: "Bebida"},
    {value: "2", viewValue: "Entrante"},
    {value: "3", viewValue: "Plato Unico"},
    {value: "4", viewValue: "Primer Plato"},
    {value: "5", viewValue: "Segundo Plato"},
    {value: "6", viewValue: "Postre"},
    {value: "7", viewValue: "Otro"}
  ];
}
