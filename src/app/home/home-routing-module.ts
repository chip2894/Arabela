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
import { AutoComplete } from './form/auto-complete/auto-complete';
import { CascadaSelect } from './form/cascada-select/cascada-select';
import { Checkbox } from './form/checkbox/checkbox';
import { DatePicker } from './form/date-picker/date-picker';
import { InputMask } from './form/input-mask/input-mask';
import { InputNumber } from './form/input-number/input-number';
import { InputOtp } from './form/input-otp/input-otp';
import { InputText } from './form/input-text/input-text';
import { KeyFilter } from './form/key-filter/key-filter';
import { ListBox } from './form/list-box/list-box';
import { MultiSelect } from './form/multi-select/multi-select';
import { InputPassword } from './form/input-password/input-password';
import { RadioButton } from './form/radio-button/radio-button';
import { InputSelect } from './form/input-select/input-select';
import { InputTextarea } from './form/input-textarea/input-textarea';
import { BotonAlternar } from './form/boton-alternar/boton-alternar';
import { Switch } from './form/switch/switch';
import { Botones } from './form/botones/botones';
import { Filtros } from './filtros/filtros';
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
      { path: 'Autocompletar', component: AutoComplete },
      { path: 'CascadaSelect', component: CascadaSelect },
      { path: 'Checkbox', component: Checkbox },
      { path: 'DatePicker', component: DatePicker },
      { path: 'inputMask', component: InputMask },
      { path: 'inputNumber', component: InputNumber },
      { path: 'inputOtp', component: InputOtp },
      { path: 'inputText', component: InputText },
      { path: 'keyFilter', component: KeyFilter },
      { path: 'listBox', component: ListBox },
      { path: 'multiSelect', component: MultiSelect },
      { path: 'inputPassword', component: InputPassword },
      { path: 'radioButton', component: RadioButton },
      { path: 'inputSelect', component: InputSelect },
      { path: 'inputTextArea', component: InputTextarea },
      { path: 'botonAlternar', component: BotonAlternar },
      { path: 'botonSwitch', component: Switch },
      { path: 'botones', component: Botones },
      { path: 'Filtros', component: Filtros },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
