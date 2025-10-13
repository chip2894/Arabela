import { Component, OnInit } from '@angular/core';
import { User, Usuarios } from '../../service/usuarios/usuarios';
import { interval, merge, Observable, timer } from 'rxjs';
import { switchMap, map, startWith } from 'rxjs/operators';

interface Column {
  field: string;
  header: string;
  customExportHeader?: string;
}

interface Articulo {
  clave: string;
  nombre: string;
}

@Component({
  selector: 'app-tabla',
  standalone: false,
  templateUrl: './tabla.html'
})
export class Tabla implements OnInit {

  // #region Variables y Constantes de Clase

  users$!: Observable<User[]>;

  private icons = [
    'pi pi-star',
    'pi pi-heart',
    'pi pi-check',
    'pi pi-times',
    'pi pi-bolt',
    'pi pi-cog',
    'pi pi-user'
  ];

  // #endregion

  constructor(private usuariosService: Usuarios) { }

  ngOnInit() {
    // Observable que emite los datos iniciales de la API
    const initial$ = this.usuariosService.getUsers().pipe(
      map(users => users.map(u => ({ ...u, icon: this.icons[0] })))
    );

    // Observable que simula “eventos en tiempo real” cada 2 segundos
    const updates$ = interval(2000).pipe(
      startWith(0),
      switchMap(() => initial$),
      map(users => {
        // Cambiamos aleatoriamente el icono de un solo usuario
        const updatedUsers = users.map(u => ({ ...u }));
        const randomIndex = Math.floor(Math.random() * updatedUsers.length);
        updatedUsers[randomIndex].icon = this.icons[Math.floor(Math.random() * this.icons.length)];
        return updatedUsers;
      })
    );

    // Merge inicial + actualizaciones
    this.users$ = merge(initial$, updates$);
  }
}
