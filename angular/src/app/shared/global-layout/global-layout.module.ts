import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DashboardComponent} from '../../dashboard/dashboard.component';
import {UserProfileComponent} from '../../user-profile/user-profile.component';
import {TableListComponent} from '../../table-list/table-list.component';
import {TypographyComponent} from '../../typography/typography.component';
import {IconsComponent} from '../../icons/icons.component';
import {MapsComponent} from '../../maps/maps.component';
import {NotificationsComponent} from '../../notifications/notifications.component';
import {UpgradeComponent} from '../../upgrade/upgrade.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import {WelcomeComponent} from '../../layouts/welcome/components/welcome.component';
import {GlobalLayoutRoutes} from './global-layout.routing';
import {AddRecipeComponent} from '../../layouts/add-recipe/components/add-recipe.component';
import {MatStepperModule} from '@angular/material/stepper';
import {StepRecipeComponent} from '../../core/step-recipe/components/step-recipe.component';
import {StepIngredientComponent} from '../../core/step-ingredient/components/step-ingredient.component';
import {StepPreparationComponent} from '../../core/step-preparation/components/step-preparation.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(GlobalLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatStepperModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
  ],
    declarations: [
        WelcomeComponent,
        AddRecipeComponent,
        DashboardComponent,
        UserProfileComponent,
        TableListComponent,
        TypographyComponent,
        IconsComponent,
        MapsComponent,
        NotificationsComponent,
        UpgradeComponent,
        StepRecipeComponent,
        StepIngredientComponent,
        StepPreparationComponent
    ]
})

export class GlobalLayoutModule {
}
