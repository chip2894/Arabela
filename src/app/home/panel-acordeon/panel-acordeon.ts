import { Component } from '@angular/core';

@Component({
  selector: 'app-panel-acordeon',
  standalone: false,
  templateUrl: './panel-acordeon.html',
  styleUrl: './panel-acordeon.scss'
})
export class PanelAcordeon {
  tabs = [
    { title: 'Title 1', content: 'Content 1', value: '0', activo: true },
    { title: 'Title 2', content: 'Content 2', value: '1', activo: true },
    { title: 'Title 3', content: 'Content 3', value: '2', activo: true },
    { title: 'Title 4 Disabled', content: 'Content 3', value: '3', activo: false },
  ];
}
