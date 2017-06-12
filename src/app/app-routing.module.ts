import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { Tab1Component } from './components/tab1/tab1.component';

const routes: Routes = [
  { path: '', component: HomeComponent, children: [] },
  { path: 'home', component: HomeComponent, children: [] },
  { path: 'tab1', component: Tab1Component, children: [] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
