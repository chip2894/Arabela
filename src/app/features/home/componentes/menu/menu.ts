import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'app-menu',
    standalone: false,
    templateUrl: './menu.html',
    styles: ``,
})
export class Menu implements OnInit {
    //#region Variables
    @Input() sidebarOpen = false;
    @Input() isMobile = false;
    @Output() closeSidebar = new EventEmitter<void>();
    items: MenuItem[] = [];
    //#endregion

    ngOnInit(): void {
        this.loadMenuItems();
    }

    loadMenuItems() {
        this.items = [
            {
                label: 'Inicio',
                icon: 'pi pi-home',
                routerLink: ['/home'],
            },
            {
                label: 'Árbol',
                icon: 'pi pi-sitemap',
                routerLink: ['/home/arbol'],
            },
            {
                label: 'Componentes',
                icon: 'pi pi-id-card',
                items: [
                    {
                        label: 'Autocompletar',
                        icon: 'pi pi-fw pi-id-card',
                        routerLink: ['/home/componentes/autocompletar'],
                    },
                    {
                        label: 'Selección en cascada',
                        icon: 'pi pi-fw pi-id-card',
                        routerLink: ['/home/componentes/selectcascada'],
                    },
                    {
                        label: 'Checkbox',
                        icon: 'pi pi-fw pi-id-card',
                        routerLink: ['/home/componentes/checkbox'],
                    },
                    {
                        label: 'DatePicker',
                        icon: 'pi pi-fw pi-id-card',
                        routerLink: ['/home/componentes/datepicker'],
                    },
                    {
                        label: 'InputMask',
                        icon: 'pi pi-fw pi-id-card',
                        routerLink: ['/home/componentes/mask'],
                    },
                    {
                        label: 'InputNumber',
                        icon: 'pi pi-fw pi-id-card',
                        routerLink: ['/home/componentes/number'],
                    },
                    {
                        label: 'InputOtp',
                        icon: 'pi pi-fw pi-id-card',
                        routerLink: ['/home/componentes/otp'],
                    },
                    {
                        label: 'InputText',
                        icon: 'pi pi-fw pi-id-card',
                        routerLink: ['/home/componentes/text'],
                    },
                    {
                        label: 'KeyFilter',
                        icon: 'pi pi-fw pi-id-card',
                        routerLink: ['/home/componentes/keyfilter'],
                    },
                    {
                        label: 'ListBox',
                        icon: 'pi pi-fw pi-id-card',
                        routerLink: ['/home/componentes/listbox'],
                    },
                    {
                        label: 'MultiSelect',
                        icon: 'pi pi-fw pi-id-card',
                        routerLink: ['/home/componentes/multiselect'],
                    },
                    {
                        label: 'Password',
                        icon: 'pi pi-fw pi-id-card',
                        routerLink: ['/home/componentes/password'],
                    },
                    {
                        label: 'RadioButton',
                        icon: 'pi pi-fw pi-id-card',
                        routerLink: ['/home/componentes/radio'],
                    },
                    {
                        label: 'Select',
                        icon: 'pi pi-fw pi-id-card',
                        routerLink: ['/home/componentes/select'],
                    },
                    {
                        label: 'TextArea',
                        icon: 'pi pi-fw pi-id-card',
                        routerLink: ['/home/componentes/textarea'],
                    },
                    {
                        label: 'ToggleButton',
                        icon: 'pi pi-fw pi-id-card',
                        routerLink: ['/home/componentes/togglebutton'],
                    },
                    {
                        label: 'ToggleSwitch',
                        icon: 'pi pi-fw pi-id-card',
                        routerLink: ['/home/componentes/toggleswitch'],
                    },
                    {
                        label: 'Botones',
                        icon: 'pi pi-fw pi-id-card',
                        routerLink: ['/home/componentes/botones'],
                    },
                ],
            },
            {
                label: 'Filtros',
                icon: 'pi pi-filter',
                routerLink: ['/home/filtros'],
            },
            {
                label: 'Overlays',
                icon: 'pi pi-box',
                items: [
                    {
                        label: 'ConfirmDialog',
                        icon: 'pi pi-box',
                        routerLink: ['/home/overlays/confirmdialog'],
                    },
                    {
                        label: 'ConfirmPopup',
                        icon: 'pi pi-box',
                        routerLink: ['/home/overlays/confirmpopup'],
                    },
                    { label: 'Modal', icon: 'pi pi-box', routerLink: ['/home/overlays/modal'] },
                    { label: 'Drawer', icon: 'pi pi-box', routerLink: ['/home/overlays/drawer'] },
                    { label: 'Popover', icon: 'pi pi-box', routerLink: ['/home/overlays/popover'] },
                    { label: 'Tooltip', icon: 'pi pi-box', routerLink: ['/home/overlays/tooltip'] },
                ],
            },
            {
                label: 'Páginas',
                icon: 'pi pi-file',
                items: [
                    {
                        label: '401',
                        icon: 'pi pi-file',
                        routerLink: ['/home/paginas/unauthorized'],
                    },
                    { label: '404', icon: 'pi pi-file', routerLink: ['/home/paginas/notfound'] },
                ],
            },
            {
                label: 'Paneles',
                icon: 'pi pi-objects-column',
                items: [
                    {
                        label: 'Acordeón',
                        icon: 'pi pi-objects-column',
                        routerLink: ['/home/paneles/acordeon'],
                    },
                    {
                        label: 'Card',
                        icon: 'pi pi-objects-column',
                        routerLink: ['/home/paneles/card'],
                    },
                    {
                        label: 'Fieldset',
                        icon: 'pi pi-objects-column',
                        routerLink: ['/home/paneles/fieldset'],
                    },
                    {
                        label: 'Panel',
                        icon: 'pi pi-objects-column',
                        routerLink: ['/home/paneles/panel'],
                    },
                    {
                        label: 'Tabs',
                        icon: 'pi pi-objects-column',
                        routerLink: ['/home/paneles/tabs'],
                    },
                ],
            },
            {
                label: 'Subir Archivo',
                icon: 'pi pi-fw pi-upload',
                routerLink: ['/home/upload'],
            },
            {
                label: 'Tablas',
                icon: 'pi pi-table',
                items: [
                    { label: 'Básica', icon: 'pi pi-table', routerLink: ['/home/tablas/basica'] },
                    {
                        label: 'Expansión',
                        icon: 'pi pi-table',
                        routerLink: ['/home/tablas/expansion'],
                    },
                    {
                        label: 'Filas Estáticas',
                        icon: 'pi pi-table',
                        routerLink: ['/home/tablas/filasestaticas'],
                    },
                    { label: 'Filtros', icon: 'pi pi-table', routerLink: ['/home/tablas/filtros'] },
                    {
                        label: 'Paginación',
                        icon: 'pi pi-table',
                        routerLink: ['/home/tablas/paginacion'],
                    },
                ],
            },
        ];
        this.sortMenuItemsExceptInicio();
    }

    private sortMenuItemsExceptInicio(): void {
        // Mantener "Inicio" primero
        const inicio = this.items.find((i) => i.label === 'Inicio');
        const resto = this.items.filter((i) => i.label !== 'Inicio');

        // Ordenar el resto alfabéticamente
        this.sortMenuItems(resto);

        // Reconstruir el arreglo con "Inicio" al principio
        this.items = inicio ? [inicio, ...resto] : resto;
    }

    private sortMenuItems(items: MenuItem[]): void {
        items.sort((a, b) => a.label!.localeCompare(b.label!, 'es', { sensitivity: 'base' }));
        for (const item of items) {
            if (item.items) {
                this.sortMenuItems(item.items);
            }
        }
    }

    refreshMenu() {
        this.loadMenuItems();
    }
}
