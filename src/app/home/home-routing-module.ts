import { ComponentFactoryResolver, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//#region Componentes
import { Home } from './home';
import { Tabla } from './tabla/tabla';
import { Tree } from './tree/tree';
//#endregion


const routes: Routes = [
  {
    path: '',
    component: Home,
    children: [
      { path: '', redirectTo: 'Tabla', pathMatch: 'full' },
      { path: 'Tabla', component: Tabla },
      { path: 'Arbol', component: Tree }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
