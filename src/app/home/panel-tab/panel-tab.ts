import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panel-tab',
  standalone: false,
  templateUrl: './panel-tab.html',
  styleUrl: './panel-tab.scss'
})
export class PanelTab implements OnInit {
  tabs: { title: string; value: number; content: string }[] = [];

  ngOnInit() {
    this.tabs = [
      { title: 'Tab 1', value: 0, content: 'Tab 1 Content' },
      { title: 'Tab 2', value: 1, content: 'Tab 2 Content' },
      { title: 'Tab 3', value: 2, content: 'Tab 3 Content' },
    ];
  }
}