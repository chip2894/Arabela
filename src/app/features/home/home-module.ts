import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Home } from './home';
import { HomeRoutingModule } from './home-routing-module';
import { Header } from './componentes/header/header';
import { SharedModule } from '../../shared/shared-module';
import { Menu } from './componentes/menu/menu';
import { AreaTrabajo } from './componentes/area-trabajo/area-trabajo';
import { Footer } from './componentes/footer/footer';
import { Arbol } from './componentes/arbol/arbol';
import { Filtro } from './componentes/filtro/filtro';
import { AutoCompletar } from './componentes/componentes/auto-completar/auto-completar';
import { FormsModule } from '@angular/forms';
import { SelectCascada } from './componentes/componentes/select-cascada/select-cascada';
import { Checkbox } from './componentes/componentes/checkbox/checkbox';
import { Datepicker } from './componentes/componentes/datepicker/datepicker';
import { Mask } from './componentes/componentes/mask/mask';
import { InputNumber } from './componentes/componentes/input-number/input-number';
import { InputOtp } from './componentes/componentes/input-otp/input-otp';
import { InputText } from './componentes/componentes/input-text/input-text';
import { KeyFilter } from './componentes/componentes/key-filter/key-filter';
import { ListBox } from './componentes/componentes/list-box/list-box';
import { MultiSelect } from './componentes/componentes/multi-select/multi-select';
import { Password } from './componentes/componentes/password/password';
import { Radio } from './componentes/componentes/radio/radio';
import { Select } from './componentes/componentes/select/select';
import { PanelMenuList } from 'primeng/panelmenu';
import { Textarea } from './componentes/componentes/textarea/textarea';
import { ToggleButton } from './componentes/componentes/toggle-button/toggle-button';
import { ToggleSwitch } from './componentes/componentes/toggle-switch/toggle-switch';
import { Botones } from './componentes/componentes/botones/botones';
import { Upload } from './componentes/upload/upload';
import { ArbolService } from '../../core/Service/ArbolService/arbol.service';
import { ConfirmDialog } from './componentes/overlays/confirm-dialog/confirm-dialog';
import { ConfirmPopup } from './componentes/overlays/confirm-popup/confirm-popup';
import { Drawer } from './componentes/overlays/drawer/drawer';
import { Modal } from './componentes/overlays/modal/modal';
import { Popover } from './componentes/overlays/popover/popover';
import { Tooltip } from './componentes/overlays/tooltip/tooltip';
import { NotFound } from './componentes/paginas/not-found/not-found';
import { Unauthorized } from './componentes/paginas/unauthorized/unauthorized';
import { Acordeon } from './componentes/paneles/acordeon/acordeon';
import { Card } from './componentes/paneles/card/card';
import { Fieldset } from './componentes/paneles/fieldset/fieldset';
import { Panel } from './componentes/paneles/panel/panel';
import { Tabs } from './componentes/paneles/tabs/tabs';
import { TablaBasica } from './componentes/tablas/tabla-basica/tabla-basica';
import { TablaExpansion } from './componentes/tablas/tabla-expansion/tabla-expansion';
import { TablaFilaEstatica } from './componentes/tablas/tabla-fila-estatica/tabla-fila-estatica';
import { TablaFiltros } from './componentes/tablas/tabla-filtros/tabla-filtros';
import { TablaPaginacion } from './componentes/tablas/tabla-paginacion/tabla-paginacion';

@NgModule({
    declarations: [
        Home,
        Header,
        Menu,
        AreaTrabajo,
        Footer,
        Arbol,
        Filtro,
        AutoCompletar,
        SelectCascada,
        Checkbox,
        Datepicker,
        Mask,
        InputNumber,
        InputOtp,
        InputText,
        KeyFilter,
        ListBox,
        MultiSelect,
        Password,
        Radio,
        Select,
        Textarea,
        ToggleButton,
        ToggleSwitch,
        Botones,
        Upload,
        ConfirmDialog,
        ConfirmPopup,
        Drawer,
        Modal,
        Popover,
        Tooltip,
        NotFound,
        Unauthorized,
        Acordeon,
        Card,
        Fieldset,
        Panel,
        Tabs,
        TablaBasica,
        TablaExpansion,
        TablaFilaEstatica,
        TablaFiltros,
        TablaPaginacion,
    ],
    imports: [CommonModule, HomeRoutingModule, SharedModule, FormsModule, PanelMenuList],
    providers: [ArbolService],
})
export class HomeModule {}
