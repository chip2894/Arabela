import { Component } from '@angular/core';

@Component({
    selector: 'app-acordeon',
    standalone: false,
    templateUrl: './acordeon.html',
    styles: ``,
})
export class Acordeon {
    tabs = [
        { title: 'Título 1', content: 'Contenido 1', value: '0', activo: true },
        { title: 'Título 2', content: 'Contenido 2', value: '1', activo: true },
        { title: 'Título 3', content: 'Contenido 3', value: '2', activo: true },
        { title: 'Título 4 Desactivado', content: 'Contenido 3', value: '3', activo: false },
    ];
}
