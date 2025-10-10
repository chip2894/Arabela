import { Component, HostListener, OnInit,} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { interval, map, filter } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html'
})

export class Home implements OnInit {

  version = '1.0.0';
  usuario = 'jcastros';
  perfil = 'Administrador';
  sidebarOpen = true;
  isMobile = false;
  breadcrumbItems: MenuItem[] = []
  home: MenuItem | undefined
  items: MenuItem[] = [
    {
      label: 'Árbol', icon: 'pi pi-fw pi-sitemap', routerLink: ['Arbol']
    },
    {
      label: 'Componentes', icon: 'pi pi-fw pi-id-card',
      items: [
        { label: 'Autocompletar', icon: 'pi pi-fw pi-id-card', routerLink: ['Autocompletar'] },
        { label: 'Selección en cascada', icon: 'pi pi-fw pi-id-card', routerLink: ['CascadaSelect'] },
        { label: 'Checkbox', icon: 'pi pi-fw pi-id-card', routerLink: ['Checkbox'] },
        { label: 'DatePicker', icon: 'pi pi-fw pi-id-card', routerLink: ['DatePicker'] },
        { label: 'inputMask', icon: 'pi pi-fw pi-id-card', routerLink: ['inputMask'] },
        { label: 'InputNumber', icon: 'pi pi-fw pi-id-card', routerLink: ['inputNumber'] },
        { label: 'InputOtp', icon: 'pi pi-fw pi-id-card', routerLink: ['inputOtp'] },
        { label: 'InputText', icon: 'pi pi-fw pi-id-card', routerLink: ['inputText'] },
        { label: 'KeyFilter', icon: 'pi pi-fw pi-id-card', routerLink: ['keyFilter'] },
        { label: 'ListBox', icon: 'pi pi-fw pi-id-card', routerLink: ['listBox'] },
        { label: 'MultiSelect', icon: 'pi pi-fw pi-id-card', routerLink: ['multiSelect'] },
        { label: 'Password', icon: 'pi pi-fw pi-id-card', routerLink: ['inputPassword'] },
        { label: 'RadioButton', icon: 'pi pi-fw pi-id-card', routerLink: ['radioButton'] },
        { label: 'Select', icon: 'pi pi-fw pi-id-card', routerLink: ['inputSelect'] },
        { label: 'TextArea', icon: 'pi pi-fw pi-id-card', routerLink: ['inputTextArea'] },
        { label: 'ToggleButton', icon: 'pi pi-fw pi-id-card', routerLink: ['botonAlternar'] },
        { label: 'ToggleSwitch', icon: 'pi pi-fw pi-id-card', routerLink: ['botonSwitch'] },
        { label: 'Botones', icon: 'pi pi-fw pi-id-card', routerLink: ['botones'] },
      ]
    },
    {
      label: 'Filtros', icon: 'pi pi-fw pi-filter', routerLink: ['Filtros']
    },
    {
      label: 'Overlays', icon: 'pi pi-fw pi-box',
      items: [
        { label: 'ConfirmDialog', icon: 'pi pi-fw pi-clone', routerLink: ['OverlayDialog'] },
        { label: 'ConfirmPopup', icon: 'pi pi-fw pi-clone', routerLink: ['OverlayPopup'] },
        { label: 'Modal', icon: 'pi pi-fw pi-clone', routerLink: ['OverlayModal'] },
        { label: 'Drawer', icon: 'pi pi-fw pi-clone', routerLink: ['OverlayDrawer'] },
        { label: 'Popover', icon: 'pi pi-fw pi-clone', routerLink: ['OverlayPopover'] },
        { label: 'Tooltip', icon: 'pi pi-fw pi-clone', routerLink: ['OverlayTooltip'] },
      ]
    },
    {
      label: 'Páginas', icon: 'pi pi-fw pi-file',
      items: [
        { label: 'Login', icon: 'pi pi-fw pi-file', routerLink: ['Login'] },
        { label: '404', icon: 'pi pi-fw pi-file', routerLink: ['404'] },
        { label: '401', icon: 'pi pi-fw pi-file', routerLink: ['401'] },
      ]
    },
    {
      label: 'Paneles', icon: 'pi pi-fw pi-objects-column',
      items: [
        { label: 'Acordeón', icon: 'pi pi-fw pi-th-large', routerLink: ['PanelAcordeon'] },
        { label: 'Card', icon: 'pi pi-fw pi-th-large', routerLink: ['PanelCard'] },
        { label: 'Fieldset', icon: 'pi pi-fw pi-th-large', routerLink: ['PanelFieldset'] },
        { label: 'Panel', icon: 'pi pi-fw pi-th-large', routerLink: ['Panel'] },
        { label: 'Tabs', icon: 'pi pi-fw pi-th-large', routerLink: ['PanelTab'] },
      ]
    },
    {
      label: 'Subir Archivo', icon: 'pi pi-fw pi-upload', routerLink: ['Upload']
    },
    {
      label: 'Tablas', icon: 'pi pi-fw pi-table',
      items: [
        { label: 'Básica', icon: 'pi pi-fw pi-table', routerLink: ['Tabla'] },
        { label: 'Expansión', icon: 'pi pi-fw pi-table', routerLink: ['TablaExpansion'] },
        { label: 'Filas Estáticas', icon: 'pi pi-fw pi-table', routerLink: ['TablaFilasEstaticas'] },
        { label: 'Filtros', icon: 'pi pi-fw pi-table', routerLink: ['TablaFiltros'] },
        { label: 'Paginación', icon: 'pi pi-fw pi-table', routerLink: ['TablaPaginacion'] },
      ]
    },
  ];

  private dias = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

  fechaActual$ = interval(1000).pipe(
    map(() => {
      const ahora = new Date();
      const diaSemana = this.dias[ahora.getDay()];
      const dia = ahora.getDate().toString().padStart(2, '0');
      const mes = (ahora.getMonth() + 1).toString().padStart(2, '0');
      const año = ahora.getFullYear();
      const h = ahora.getHours();
      const horas = ((h % 12) || 12).toString().padStart(2, '0');
      const minutos = ahora.getMinutes().toString().padStart(2, '0');
      const segundos = ahora.getSeconds().toString().padStart(2, '0');
      const ampm = h >= 12 ? 'PM' : 'AM';
      return `${diaSemana}, ${dia}/${mes}/${año} ${horas}:${minutos}:${segundos} ${ampm}`;
    })
  );

    constructor(private router: Router) { }

  ngOnInit(): void {
    this.sortMenuItems(this.items);
    this.home = { icon: 'pi pi-home', routerLink: '/' };
    this.checkScreen();

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.updateBreadcrumb();
      this.setActiveMenuItem();
    });

    this.updateBreadcrumb();
    this.setActiveMenuItem();
  }

  updateBreadcrumb() {
    const currentUrl = this.router.url.replace(/^\/+|\/+$/g, '').toLowerCase();
    const path = this.findMenuPath(this.items, currentUrl);

    this.breadcrumbItems = path.length ? path.map(p => ({
      label: p.label,
      icon: p.icon,
      routerLink: p.routerLink
    })) : [];
  }

  findMenuPath(items: MenuItem[], route: string, trail: MenuItem[] = []): MenuItem[] {
    for (const item of items) {
      const newTrail = [...trail, item];
      const link = Array.isArray(item.routerLink)
        ? item.routerLink.join('/').toLowerCase()
        : (item.routerLink || '').toString().toLowerCase();

      const normalizedRoute = route.replace(/^home\//, '');
      const normalizedLink = link.replace(/^home\//, '');

      if (normalizedRoute === normalizedLink) return newTrail;

      if (item.items && item.items.length > 0) {
        const found = this.findMenuPath(item.items, route, newTrail);
        if (found.length > 0) return found;
      }
    }
    return [];
  }

  sortMenuItems(items: any[]): any[] {
    return items
      .map(item => {
        if (item.items && item.items.length > 0) {
          item.items = this.sortMenuItems(item.items);
        }
        return item;
      })
      .sort((a, b) => a.label.localeCompare(b.label));
  }

  setActiveMenuItem() {
    const currentUrl = this.router.url.replace(/^\/+|\/+$/g, '').toLowerCase();
    const path = this.findMenuPath(this.items, currentUrl);

    this.items.forEach(item => this.markActive(item, path));
  }

  markActive(item: MenuItem, path: MenuItem[]) {
    item.styleClass = path.includes(item)
      ? 'bg-blue-200 text-neutral-100 font-semibold text-base' // activo
      : 'hover:bg-blue-200'; // inactivo
    if (item.items) item.items.forEach(child => this.markActive(child, path));
  }

  isActive(item: MenuItem): boolean {
  const currentUrl = this.router.url.replace(/^\/+|\/+$/g, '').toLowerCase();
  const path = this.findMenuPath(this.items, currentUrl);
  return path.includes(item);
}

  toggleSidebar() { this.sidebarOpen = !this.sidebarOpen; }
  refreshMenu() { this.items = [...this.items]; }
  goHome() { this.router.navigate(['/']); }

  @HostListener('window:resize')
  checkScreen() {
    this.isMobile = window.innerWidth < 768;
    this.sidebarOpen = !this.isMobile ? true : false;
  }
}
