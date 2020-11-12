import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { GlobalLayoutComponent } from './shared/global-layout/components/global-layout.component';

const routes: Routes =[
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full',
  }, {
    path: '',
    component: GlobalLayoutComponent,
    children: [{
      path: '',
      loadChildren: './shared/global-layout/global-layout.module#GlobalLayoutModule'
    }]
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
