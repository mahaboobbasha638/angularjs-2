import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { LoginGuard } from './guards/login/login.guard'

const routes: Routes = [
  { path: '', redirectTo:'home', pathMatch:'full'  },
  { path: 'login', component: LoginComponent, canActivate:[], children:[] },
  { path: 'home', component: HomeComponent, canActivate:[LoginGuard],
    children: [
      { path: ':file', component: HomeComponent, children: [] }
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [LoginGuard]
})
export class AppRoutingModule { }
