import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFound } from './shared/not-found/not-found';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./features/login/login-module').then(m => m.LoginModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./features/home/home-module').then(m => m.HomeModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NotFound
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
