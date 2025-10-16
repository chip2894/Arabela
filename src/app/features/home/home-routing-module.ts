import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home';
import { Arbol } from './componentes/arbol/arbol';
import { Filtro } from './componentes/filtro/filtro';
import { AutoCompletar } from './componentes/componentes/auto-completar/auto-completar';
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
import { Textarea } from './componentes/componentes/textarea/textarea';
import { ToggleButton } from './componentes/componentes/toggle-button/toggle-button';
import { ToggleSwitch } from './componentes/componentes/toggle-switch/toggle-switch';
import { Botones } from './componentes/componentes/botones/botones';
import { Upload } from './componentes/upload/upload';
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

const routes: Routes = [
    {
        path: '',
        component: Home,
        children: [
            {
                path: 'arbol',
                component: Arbol,
                data: { breadcrumb: 'Árbol', icon: 'pi pi-sitemap' },
            },
            {
                path: 'componentes',
                data: { breadcrumb: 'Componentes', icon: 'pi pi-id-card' },
                children: [
                    {
                        path: 'autocompletar',
                        component: AutoCompletar,
                        data: { breadcrumb: 'AutoCompletar', icon: 'pi pi-id-card' },
                    },
                    {
                        path: 'selectcascada',
                        component: SelectCascada,
                        data: { breadcrumb: 'Selección en cascada', icon: 'pi pi-id-card' },
                    },
                    {
                        path: 'checkbox',
                        component: Checkbox,
                        data: { breadcrumb: 'Checkbox', icon: 'pi pi-id-card' },
                    },
                    {
                        path: 'datepicker',
                        component: Datepicker,
                        data: { breadcrumb: 'DatePicker', icon: 'pi pi-id-card' },
                    },
                    {
                        path: 'mask',
                        component: Mask,
                        data: { breadcrumb: 'InputMask', icon: 'pi pi-id-card' },
                    },
                    {
                        path: 'number',
                        component: InputNumber,
                        data: { breadcrumb: 'InputNumber', icon: 'pi pi-id-card' },
                    },
                    {
                        path: 'otp',
                        component: InputOtp,
                        data: { breadcrumb: 'InputOtp', icon: 'pi pi-id-card' },
                    },
                    {
                        path: 'text',
                        component: InputText,
                        data: { breadcrumb: 'InputText', icon: 'pi pi-id-card' },
                    },
                    {
                        path: 'keyfilter',
                        component: KeyFilter,
                        data: { breadcrumb: 'KeyFilter', icon: 'pi pi-id-card' },
                    },
                    {
                        path: 'listbox',
                        component: ListBox,
                        data: { breadcrumb: 'ListBox', icon: 'pi pi-id-card' },
                    },
                    {
                        path: 'multiselect',
                        component: MultiSelect,
                        data: { breadcrumb: 'MultiSelect', icon: 'pi pi-id-card' },
                    },
                    {
                        path: 'password',
                        component: Password,
                        data: { breadcrumb: 'Password', icon: 'pi pi-id-card' },
                    },
                    {
                        path: 'radio',
                        component: Radio,
                        data: { breadcrumb: 'RadioButton', icon: 'pi pi-id-card' },
                    },
                    {
                        path: 'select',
                        component: Select,
                        data: { breadcrumb: 'Select', icon: 'pi pi-id-card' },
                    },
                    {
                        path: 'textarea',
                        component: Textarea,
                        data: { breadcrumb: 'TextArea', icon: 'pi pi-id-card' },
                    },
                    {
                        path: 'togglebutton',
                        component: ToggleButton,
                        data: { breadcrumb: 'ToggleButton', icon: 'pi pi-id-card' },
                    },
                    {
                        path: 'toggleswitch',
                        component: ToggleSwitch,
                        data: { breadcrumb: 'ToggleSwitch', icon: 'pi pi-id-card' },
                    },
                    {
                        path: 'botones',
                        component: Botones,
                        data: { breadcrumb: 'Botones', icon: 'pi pi-id-card' },
                    },
                ],
            },
            {
                path: 'filtros',
                component: Filtro,
                data: { breadcrumb: 'Filtros', icon: 'pi pi-filter' },
            },
            {
                path: 'upload',
                component: Upload,
                data: { breadcrumb: 'Subir Archivo', icon: 'pi pi-upload' },
            },
            {
                path: 'overlays',
                data: { breadcrumb: 'Overlays', icon: 'pi pi-box' },
                children: [
                    {
                        path: 'confirmdialog',
                        component: ConfirmDialog,
                        data: { breadcrumb: 'ConfirmDialog', icon: 'pi pi-box' },
                    },
                    {
                        path: 'confirmpopup',
                        component: ConfirmPopup,
                        data: { breadcrumb: 'ConfirmPopup', icon: 'pi pi-box' },
                    },
                    {
                        path: 'drawer',
                        component: Drawer,
                        data: { breadcrumb: 'Drawer', icon: 'pi pi-box' },
                    },
                    {
                        path: 'modal',
                        component: Modal,
                        data: { breadcrumb: 'Modal', icon: 'pi pi-box' },
                    },
                    {
                        path: 'popover',
                        component: Popover,
                        data: { breadcrumb: 'Popover', icon: 'pi pi-box' },
                    },
                    {
                        path: 'tooltip',
                        component: Tooltip,
                        data: { breadcrumb: 'Tooltip', icon: 'pi pi-box' },
                    },
                ],
            },
            {
                path: 'paginas',
                data: { breadcrumb: 'Páginas', icon: 'pi pi-file' },
                children: [
                    {
                        path: 'notfound',
                        component: NotFound,
                        data: { breadcrumb: 'NotFound', icon: 'pi pi-file' },
                    },
                    {
                        path: 'unauthorized',
                        component: Unauthorized,
                        data: { breadcrumb: 'Unauthorized', icon: 'pi pi-file' },
                    },
                ],
            },
            {
                path: 'paneles',
                data: { breadcrumb: 'Paneles', icon: 'pi pi-objects-column' },
                children: [
                    {
                        path: 'acordeon',
                        component: Acordeon,
                        data: { breadcrumb: 'Acordeón', icon: 'pi pi-objects-column' },
                    },
                    {
                        path: 'card',
                        component: Card,
                        data: { breadcrumb: 'Card', icon: 'pi pi-objects-column' },
                    },
                    {
                        path: 'fieldset',
                        component: Fieldset,
                        data: { breadcrumb: 'Fieldset', icon: 'pi pi-objects-column' },
                    },
                    {
                        path: 'panel',
                        component: Panel,
                        data: { breadcrumb: 'Panel', icon: 'pi pi-objects-column' },
                    },
                    {
                        path: 'tabs',
                        component: Tabs,
                        data: { breadcrumb: 'Tabs', icon: 'pi pi-objects-column' },
                    },
                ],
            },
            {
                path: 'tablas',
                data: { breadcrumb: 'Tablas', icon: 'pi pi-table' },
                children: [
                    {
                        path: 'basica',
                        component: TablaBasica,
                        data: { breadcrumb: 'Básica', icon: 'pi pi-table' },
                    },
                    {
                        path: 'expansion',
                        component: TablaExpansion,
                        data: { breadcrumb: 'Expansión', icon: 'pi pi-table' },
                    },
                    {
                        path: 'filasestaticas',
                        component: TablaFilaEstatica,
                        data: { breadcrumb: 'Filas Estáticas', icon: 'pi pi-table' },
                    },
                    {
                        path: 'filtros',
                        component: TablaFiltros,
                        data: { breadcrumb: 'Filtros', icon: 'pi pi-table' },
                    },
                    {
                        path: 'paginacion',
                        component: TablaPaginacion,
                        data: { breadcrumb: 'Paginación', icon: 'pi pi-table' },
                    },
                ],
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class HomeRoutingModule {}
