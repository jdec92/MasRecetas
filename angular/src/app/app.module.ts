import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app.routing';
import {SharedModule} from "./shared/shared.module";
import { AppComponent } from './app.component';

import {
  AgmCoreModule
} from '@agm/core';
import { GlobalLayoutComponent } from './shared/global-layout/components/global-layout.component';
import {WelcomeService} from './layouts/welcome/service/welcome.service';
import {BrowserModule} from '@angular/platform-browser';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
    SharedModule,
    RouterModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    })
  ],
  declarations: [
    AppComponent,
    GlobalLayoutComponent,
  ],
  providers: [
    WelcomeService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
