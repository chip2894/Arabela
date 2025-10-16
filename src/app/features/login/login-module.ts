import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
//#region Modulos
import {LoginRoutingModule} from './login-routing-module'
import { SharedModule } from '../../shared/shared-module';
//#endregion
//#region Componentes
import { Login } from './login';
//#endregion


@NgModule({
  declarations: [Login],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    LoginRoutingModule,
]
})
export class LoginModule { }
