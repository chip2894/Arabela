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
  items: MenuItem[] = [];

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
    this.items = [
      { label: 'Tabla', icon: 'pi pi-fw pi-home', routerLink: ['Tabla'] },
      { label: 'Árbol', icon: 'pi pi-fw pi-sitemap', routerLink: ['Arbol'] },
      {
        label: 'Reportes', icon: 'pi pi-fw pi-file',
        items: [
          { label: 'Reporte 1', icon: 'pi pi-fw pi-chart-line', routerLink: ['Reporte1'] },
          { label: 'Reporte 2', icon: 'pi pi-fw pi-chart-bar', routerLink: ['Reporte2'] }
        ]
      }
    ];

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
    this.items = [
      { label: 'Tabla', icon: 'pi pi-fw pi-home', routerLink: ['Tabla'] },
      { label: 'Árbol', icon: 'pi pi-fw pi-sitemap', routerLink: ['Arbol'] }
    ];
  }

  goHome() {
    this.router.navigate(['/']);
  }

  @HostListener('window:resize')
  checkScreen() {
    this.isMobile = window.innerWidth < 768;
    this.sidebarOpen = !this.isMobile ? true : false;
  }
}