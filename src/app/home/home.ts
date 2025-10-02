import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home implements OnInit {

  items: MenuItem[] = [];

  constructor(private router: Router) { }

  ngOnInit() {
    this.items = [
      { label: 'Tabla', icon: 'pi pi-fw pi-home', routerLink: ['Tabla'] },
      { label: 'Árbol', icon: 'pi pi-fw pi-sitemap', routerLink: ['Arbol'] }
    ];

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.items.forEach(item => {
          item.styleClass = this.router.url.includes(item.routerLink as string) ? 'active-link' : '';
        });
      }
    });
  }
}