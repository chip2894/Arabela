import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
//#region Componentes
import { NotFound } from './not-found/not-found';
import { ButtonDirective } from "primeng/button";
import { PrimeNgModule } from './prime-ng/prime-ng-module';
//#endregion



@NgModule({
  declarations: [
    // Agregar otros componentes, pipes o directivas reutilizables
    NotFound
  ],
  imports: [
    CommonModule,
    RouterModule,
    ButtonDirective
],
  exports: [
    // Exporta otros componentes, pipes o directivas reutilizables
    NotFound,
    PrimeNgModule
  ]
})
export class SharedModule { }
