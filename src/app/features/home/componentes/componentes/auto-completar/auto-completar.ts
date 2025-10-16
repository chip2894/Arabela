import { Component } from '@angular/core';

interface AutoCompleteCompleteEvent {
    originalEvent: Event;
    query: string;
}

@Component({
  selector: 'app-auto-completar',
  standalone: false,
  templateUrl: './auto-completar.html',
  styles: ``
})
export class AutoCompletar {
    //#region Variables
    items: any[] = [];
    value: any;
    value1: number | undefined;
    //#endregion

    search(event: AutoCompleteCompleteEvent): void {
        this.items = [...Array(10).keys()].map(item => event.query + '-' + item);
    }

    search1(event: AutoCompleteCompleteEvent): void {
        let _items = [...Array(10).keys()];
        this.items = event.query ? [...Array(10).keys()].map((item) => event.query + '-' + item) : _items;
    }
}
