import { ComponentFactoryResolver, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//#region Componentes
import { Home } from './home';
import { Tabla } from './tabla/tabla';
import { Tree } from './tree/tree';
import { TablaPaginacion } from './tabla-paginacion/tabla-paginacion';
import { TablaFiltros } from './tabla-filtros/tabla-filtros';
import { TablaExpansion } from './tabla-expansion/tabla-expansion';
import { TablaFilasEstaticas } from './tabla-filas-estaticas/tabla-filas-estaticas';
import { PanelAcordeon } from './panel-acordeon/panel-acordeon';
import { PanelCard } from './panel-card/panel-card';
import { PanelFieldset } from './panel-fieldset/panel-fieldset';
import { Panel } from './panel/panel';
import { PanelTab } from './panel-tab/panel-tab';
import { OverlayDialog } from './overlay-dialog/overlay-dialog';
import { OverlayPopup } from './overlay-popup/overlay-popup';
import { OverlayModal } from './overlay-modal/overlay-modal';
import { OverlayDrawer } from './overlay-drawer/overlay-drawer';
import { OverlayPopover } from './overlay-popover/overlay-popover';
import { OverlayTooltip } from './overlay-tooltip/overlay-tooltip';
import { UploadFile } from './upload-file/upload-file';
import { Login } from './login/login';
import { NotFound } from './not-found/not-found';
import { Unauthorized } from './unauthorized/unauthorized';
//#endregion


const routes: Routes = [
  {
    path: '',
    component: Home,
    children: [
      { path: '', redirectTo: 'Login', pathMatch: 'full' },
      { path: 'Arbol', component: Tree },
      { path: 'Panel', component: Panel },
      { path: 'PanelAcordeon', component: PanelAcordeon },
      { path: 'PanelCard', component: PanelCard },
      { path: 'PanelFieldset', component: PanelFieldset },
      { path: 'PanelTab', component: PanelTab },
      { path: 'Tabla', component: Tabla },
      { path: 'TablaFilasEstaticas', component: TablaFilasEstaticas },
      { path: 'TablaExpansion', component: TablaExpansion },
      { path: 'TablaFiltros', component: TablaFiltros },
      { path: 'TablaPaginacion', component: TablaPaginacion },
      { path: 'OverlayDialog', component: OverlayDialog },
      { path: 'OverlayPopup', component: OverlayPopup },
      { path: 'OverlayModal', component: OverlayModal },
      { path: 'OverlayDrawer', component: OverlayDrawer },
      { path: 'OverlayPopover', component: OverlayPopover },
      { path: 'OverlayTooltip', component: OverlayTooltip },
      { path: 'Upload', component: UploadFile },
      { path: 'Login', component: Login },
      { path: '404', component: NotFound },
      { path: '401', component: Unauthorized },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
