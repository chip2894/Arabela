import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-panel',
    standalone: false,
    templateUrl: './panel.html',
    styles: ``,
})
export class Panel implements OnInit {
    items: { label?: string; icon?: string; separator?: boolean }[] = [];

    ngOnInit() {
        this.items = [
            {
                label: 'Refresh',
                icon: 'pi pi-refresh',
            },
            {
                label: 'Search',
                icon: 'pi pi-search',
            },
            {
                separator: true,
            },
            {
                label: 'Delete',
                icon: 'pi pi-times',
            },
        ];
    }
}
