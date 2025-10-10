import { Component } from '@angular/core';

interface AutoCompleteCompleteEvent {
    originalEvent: Event;
    query: string;
}

@Component({
  selector: 'app-auto-complete',
  standalone: false,
  templateUrl: './auto-complete.html',
  styles: ``
})
export class AutoComplete {

  items: any[] = [];

    value: any;
    value1: number | undefined;

    search(event: AutoCompleteCompleteEvent): void {
        this.items = [...Array(10).keys()].map(item => event.query + '-' + item);
    }

    search1(event: AutoCompleteCompleteEvent): void {
        let _items = [...Array(10).keys()];
        this.items = event.query ? [...Array(10).keys()].map((item) => event.query + '-' + item) : _items;
    }

}
