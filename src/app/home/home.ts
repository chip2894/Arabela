import { Component, HostListener, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { interval, map } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home implements OnInit {

  version = '1.0.0';
  usuario = 'jcastros';
  perfil = 'Administrador';
  sidebarOpen = true;
  isMobile = false;
  items: MenuItem[] = [
    {
      label: 'Árbol', icon: 'pi pi-fw pi-sitemap', routerLink: ['Arbol']
    },
    {
      label: 'Subir Archivo', icon: 'pi pi-fw pi-upload', routerLink: ['Upload']
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
      label: 'Tablas', icon: 'pi pi-fw pi-table',
      items: [
        { label: 'Básica', icon: 'pi pi-fw pi-table', routerLink: ['Tabla'] },
        { label: 'Expansión', icon: 'pi pi-fw pi-table', routerLink: ['TablaExpansion'] },
        { label: 'Filas Estáticas', icon: 'pi pi-fw pi-table', routerLink: ['TablaFilasEstaticas'] },
        { label: 'Filtros', icon: 'pi pi-fw pi-table', routerLink: ['TablaFiltros'] },
        { label: 'Paginación', icon: 'pi pi-fw pi-table', routerLink: ['TablaPaginacion'] },
      ]
    },
    {
      label: 'Páginas', icon: 'pi pi-fw pi-page',
      items: [
        { label: 'Login', icon: 'pi pi-fw pi-user', routerLink: ['Login'] }
      ]
    }
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
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.items.forEach(item => {
          item.styleClass = this.router.url.includes(item.routerLink as string) ? 'active-link' : '';
        });
      }
    });

    this.checkScreen();
  }

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }

  refreshMenu() {
    this.items = [...this.items];
  }

  goHome() {
    this.router.navigate(['/']);
  }

  @HostListener('window:resize')
  checkScreen() {
    this.isMobile = window.innerWidth < 768;
    this.sidebarOpen = !this.isMobile ? true : false;
    console.log(`isMobile: ${this.isMobile}, sidebarOpen: ${this.sidebarOpen}`);
  }
}