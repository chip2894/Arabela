import { Component, OnInit } from '@angular/core';

interface City {
    name: string,
    code: string
}

@Component({
  selector: 'app-multi-select',
  standalone: false,
  templateUrl: './multi-select.html',
  styles: ``
})
export class MultiSelect implements OnInit {
    cities!: City[];

    selectedCities!: City[];

    ngOnInit() {
        this.cities = [
            {name: 'New York', code: 'NY'},
            {name: 'Rome', code: 'RM'},
            {name: 'London', code: 'LDN'},
            {name: 'Istanbul', code: 'IST'},
            {name: 'Paris', code: 'PRS'}
        ];
    }
}
