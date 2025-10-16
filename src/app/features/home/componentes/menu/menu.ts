import {
    Component,
    EventEmitter,
    Input,
    OnInit,
    Output,
    OnDestroy,
    AfterViewInit,
} from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-menu',
    standalone: false,
    templateUrl: './menu.html',
    styles: ``,
})
export class Menu implements OnInit, OnDestroy, AfterViewInit {
    //#region Variables
    @Input() sidebarOpen = false;
    @Input() isMobile = false;
    @Output() closeSidebar = new EventEmitter<void>();
    items: MenuItem[] = [];
    private routerSubscription?: Subscription;
    //#endregion

    constructor(private router: Router) {}

    ngOnInit(): void {
        this.loadMenuItems();

        // Suscribirse a cambios de ruta
        this.routerSubscription = this.router.events
            .pipe(filter((event) => event instanceof NavigationEnd))
            .subscribe(() => {
                setTimeout(() => this.updateActiveSubItems(), 100);
            });
    }

    ngAfterViewInit(): void {
        // Aplicar estado activo inicial
        setTimeout(() => this.updateActiveSubItems(), 200);
    }

    ngOnDestroy(): void {
        if (this.routerSubscription) {
            this.routerSubscription.unsubscribe();
        }
    }

    loadMenuItems() {
        this.items = [
            {
                label: 'Inicio',
                icon: 'pi pi-home',
                routerLink: ['/home'],
                routerLinkActiveOptions: { exact: true },
                command: () => this.handleMenuClick(),
            },
            {
                label: 'Árbol',
                icon: 'pi pi-sitemap',
                routerLink: ['/home/arbol'],
                command: () => this.handleMenuClick(),
            },
            {
                label: 'Componentes',
                icon: 'pi pi-id-card',
                items: [
                    {
                        label: 'Autocompletar',
                        icon: 'pi pi-fw pi-id-card',
                        routerLink: ['/home/componentes/autocompletar'],
                        command: () => this.handleMenuClick(),
                    },
                    {
                        label: 'Selección en cascada',
                        icon: 'pi pi-fw pi-id-card',
                        routerLink: ['/home/componentes/selectcascada'],
                        command: () => this.handleMenuClick(),
                    },
                    {
                        label: 'Checkbox',
                        icon: 'pi pi-fw pi-id-card',
                        routerLink: ['/home/componentes/checkbox'],
                        command: () => this.handleMenuClick(),
                    },
                    {
                        label: 'DatePicker',
                        icon: 'pi pi-fw pi-id-card',
                        routerLink: ['/home/componentes/datepicker'],
                        command: () => this.handleMenuClick(),
                    },
                    {
                        label: 'InputMask',
                        icon: 'pi pi-fw pi-id-card',
                        routerLink: ['/home/componentes/mask'],
                        command: () => this.handleMenuClick(),
                    },
                    {
                        label: 'InputNumber',
                        icon: 'pi pi-fw pi-id-card',
                        routerLink: ['/home/componentes/number'],
                        command: () => this.handleMenuClick(),
                    },
                    {
                        label: 'InputOtp',
                        icon: 'pi pi-fw pi-id-card',
                        routerLink: ['/home/componentes/otp'],
                        command: () => this.handleMenuClick(),
                    },
                    {
                        label: 'InputText',
                        icon: 'pi pi-fw pi-id-card',
                        routerLink: ['/home/componentes/text'],
                        command: () => this.handleMenuClick(),
                    },
                    {
                        label: 'KeyFilter',
                        icon: 'pi pi-fw pi-id-card',
                        routerLink: ['/home/componentes/keyfilter'],
                        command: () => this.handleMenuClick(),
                    },
                    {
                        label: 'ListBox',
                        icon: 'pi pi-fw pi-id-card',
                        routerLink: ['/home/componentes/listbox'],
                        command: () => this.handleMenuClick(),
                    },
                    {
                        label: 'MultiSelect',
                        icon: 'pi pi-fw pi-id-card',
                        routerLink: ['/home/componentes/multiselect'],
                        command: () => this.handleMenuClick(),
                    },
                    {
                        label: 'Password',
                        icon: 'pi pi-fw pi-id-card',
                        routerLink: ['/home/componentes/password'],
                        command: () => this.handleMenuClick(),
                    },
                    {
                        label: 'RadioButton',
                        icon: 'pi pi-fw pi-id-card',
                        routerLink: ['/home/componentes/radio'],
                        command: () => this.handleMenuClick(),
                    },
                    {
                        label: 'Select',
                        icon: 'pi pi-fw pi-id-card',
                        routerLink: ['/home/componentes/select'],
                        command: () => this.handleMenuClick(),
                    },
                    {
                        label: 'TextArea',
                        icon: 'pi pi-fw pi-id-card',
                        routerLink: ['/home/componentes/textarea'],
                        command: () => this.handleMenuClick(),
                    },
                    {
                        label: 'ToggleButton',
                        icon: 'pi pi-fw pi-id-card',
                        routerLink: ['/home/componentes/togglebutton'],
                        command: () => this.handleMenuClick(),
                    },
                    {
                        label: 'ToggleSwitch',
                        icon: 'pi pi-fw pi-id-card',
                        routerLink: ['/home/componentes/toggleswitch'],
                        command: () => this.handleMenuClick(),
                    },
                    {
                        label: 'Botones',
                        icon: 'pi pi-fw pi-id-card',
                        routerLink: ['/home/componentes/botones'],
                        command: () => this.handleMenuClick(),
                    },
                ],
            },
            {
                label: 'Filtros',
                icon: 'pi pi-filter',
                routerLink: ['/home/filtros'],
                command: () => this.handleMenuClick(),
            },
            {
                label: 'Overlays',
                icon: 'pi pi-box',
                items: [
                    {
                        label: 'ConfirmDialog',
                        icon: 'pi pi-box',
                        routerLink: ['/home/overlays/confirmdialog'],
                        command: () => this.handleMenuClick(),
                    },
                    {
                        label: 'ConfirmPopup',
                        icon: 'pi pi-box',
                        routerLink: ['/home/overlays/confirmpopup'],
                        command: () => this.handleMenuClick(),
                    },
                    {
                        label: 'Modal',
                        icon: 'pi pi-box',
                        routerLink: ['/home/overlays/modal'],
                        command: () => this.handleMenuClick(),
                    },
                    {
                        label: 'Drawer',
                        icon: 'pi pi-box',
                        routerLink: ['/home/overlays/drawer'],
                        command: () => this.handleMenuClick(),
                    },
                    {
                        label: 'Popover',
                        icon: 'pi pi-box',
                        routerLink: ['/home/overlays/popover'],
                        command: () => this.handleMenuClick(),
                    },
                    {
                        label: 'Tooltip',
                        icon: 'pi pi-box',
                        routerLink: ['/home/overlays/tooltip'],
                        command: () => this.handleMenuClick(),
                    },
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
                        command: () => this.handleMenuClick(),
                    },
                    {
                        label: '404',
                        icon: 'pi pi-file',
                        routerLink: ['/home/paginas/notfound'],
                        command: () => this.handleMenuClick(),
                    },
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
                        command: () => this.handleMenuClick(),
                    },
                    {
                        label: 'Card',
                        icon: 'pi pi-objects-column',
                        routerLink: ['/home/paneles/card'],
                        command: () => this.handleMenuClick(),
                    },
                    {
                        label: 'Fieldset',
                        icon: 'pi pi-objects-column',
                        routerLink: ['/home/paneles/fieldset'],
                        command: () => this.handleMenuClick(),
                    },
                    {
                        label: 'Panel',
                        icon: 'pi pi-objects-column',
                        routerLink: ['/home/paneles/panel'],
                        command: () => this.handleMenuClick(),
                    },
                    {
                        label: 'Tabs',
                        icon: 'pi pi-objects-column',
                        routerLink: ['/home/paneles/tabs'],
                        command: () => this.handleMenuClick(),
                    },
                ],
            },
            {
                label: 'Subir Archivo',
                icon: 'pi pi-fw pi-upload',
                routerLink: ['/home/upload'],
                command: () => this.handleMenuClick(),
            },
            {
                label: 'Tablas',
                icon: 'pi pi-table',
                items: [
                    {
                        label: 'Básica',
                        icon: 'pi pi-table',
                        routerLink: ['/home/tablas/basica'],
                        command: () => this.handleMenuClick(),
                    },
                    {
                        label: 'Expansión',
                        icon: 'pi pi-table',
                        routerLink: ['/home/tablas/expansion'],
                        command: () => this.handleMenuClick(),
                    },
                    {
                        label: 'Filas Estáticas',
                        icon: 'pi pi-table',
                        routerLink: ['/home/tablas/filasestaticas'],
                        command: () => this.handleMenuClick(),
                    },
                    {
                        label: 'Filtros',
                        icon: 'pi pi-table',
                        routerLink: ['/home/tablas/filtros'],
                        command: () => this.handleMenuClick(),
                    },
                    {
                        label: 'Paginación',
                        icon: 'pi pi-table',
                        routerLink: ['/home/tablas/paginacion'],
                        command: () => this.handleMenuClick(),
                    },
                ],
            },
        ];
        this.sortMenuItemsExceptInicio();
    }

    private sortMenuItemsExceptInicio(): void {
        const inicio = this.items.find((i) => i.label === 'Inicio');
        const resto = this.items.filter((i) => i.label !== 'Inicio');
        this.sortMenuItems(resto);
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

    private updateActiveSubItems(): void {
        const currentUrl = this.router.url;

        // Remover clase activa de todos los sub-items
        const allSubItems = document.querySelectorAll('.p-panelmenu-item-link');
        allSubItems.forEach((link) => {
            link.classList.remove('active-submenu-item');
        });

        // Agregar clase activa al sub-item que coincida con la URL actual
        allSubItems.forEach((link) => {
            const href = link.getAttribute('href');
            if (href && currentUrl === href) {
                link.classList.add('active-submenu-item');
            }
        });
    }

    private handleMenuClick(): void {
        // Actualizar estado activo después del click
        setTimeout(() => this.updateActiveSubItems(), 100);

        if (this.isMobile) {
            this.closeSidebar.emit();
        }
    }

    refreshMenu() {
        this.loadMenuItems();
        setTimeout(() => this.updateActiveSubItems(), 100);
    }
}
