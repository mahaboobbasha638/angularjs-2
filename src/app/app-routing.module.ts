import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { Tab1Component } from './components/tab1/tab1.component';
import { Tab2Component } from './components/tab2/tab2.component';
import { Tab3Component } from './components/tab3/tab3.component';

const routes: Routes = [
  { path: '', component: HomeComponent, children: [] },
  { path: 'home', component: HomeComponent, children: [] },
  { path: 'tab1', component: Tab1Component, 
    children: [
      { path: '', component: Tab2Component, children: [] },
      { path: 'tab2', component: Tab2Component, children: [] },
      { path: 'tab3', component: Tab3Component, 
        children: [
          {path: ':idname', component:Tab3Component}
        ] 
      }
    ] 
  },
  { path: '**', redirectTo: 'home'}
  /*{ path: 'tab1/:id', component: Tab1Component, children: []},
  { path: 'tab1/:id/:name', component: Tab1Component, children: []}*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
