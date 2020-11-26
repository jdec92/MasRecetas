import {RouteInfo} from '../models/routeInfo';
import {Select} from '../models/select';
import {Routes} from '@angular/router';
import {WelcomeComponent} from '../layouts/welcome/components/welcome.component';
import {AddRecipeComponent} from '../layouts/add-recipe/components/add-recipe.component';
import {DashboardComponent} from '../dashboard/dashboard.component';
import {UserProfileComponent} from '../user-profile/user-profile.component';
import {TableListComponent} from '../table-list/table-list.component';
import {TypographyComponent} from '../typography/typography.component';
import {IconsComponent} from '../icons/icons.component';
import {MapsComponent} from '../maps/maps.component';
import {NotificationsComponent} from '../notifications/notifications.component';
import {UpgradeComponent} from '../upgrade/upgrade.component';

export class GlobalConstants {
  public static apiUrl: string = 'http://localhost/api';
  public static apiEditRecipe: string = '/edit';
  public static showUltimateRecipe: string = '/ultimate/recipes/';
  public static uploadFile: string = '/upload/file';
  public static removeFile: string = '/remove/file';

  public static imageDefault: Select = {
    value: 'Receta sin imagen', viewValue: './assets/img/default.jpg'
  };

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
    {value: '1', viewValue: 'Bebida'},
    {value: '2', viewValue: 'Entrante'},
    {value: '3', viewValue: 'Plato Unico'},
    {value: '4', viewValue: 'Primer Plato'},
    {value: '5', viewValue: 'Segundo Plato'},
    {value: '6', viewValue: 'Postre'},
    {value: '7', viewValue: 'Otro'}
  ];

  public static getMeasureIngredient: Select[] = [
    {value: '0', viewValue: 'Sin Medición'},
    {value: '1', viewValue: 'Unidad'},
    {value: '2', viewValue: '(ml) Mililitros'},
    {value: '3', viewValue: '(g) Gramos'},
    {value: '4', viewValue: '(tsp) Cucharilla'},
    {value: '5', viewValue: '(tbsp) Cuchara'},
    {value: '6', viewValue: '(cup) Taza'}
  ];

  public static getLayoutRoutes: Routes = [
    {path: 'welcome', component: WelcomeComponent},
    {path: 'add', component: AddRecipeComponent},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'user-profile', component: UserProfileComponent},
    {path: 'table-list', component: TableListComponent},
    {path: 'typography', component: TypographyComponent},
    {path: 'icons', component: IconsComponent},
    {path: 'maps', component: MapsComponent},
    {path: 'notifications', component: NotificationsComponent},
    {path: 'upgrade', component: UpgradeComponent}
  ];

}
