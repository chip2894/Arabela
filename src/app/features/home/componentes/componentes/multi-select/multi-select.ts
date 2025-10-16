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
    //#region Variables
    cities!: City[];
    selectedCities!: City[];
    //#endregion

    //#region Constructor
    constructor(){}
    //#endregion

    //#region Ciclos de Vida
    ngOnInit() {
        this.cities = [
            {name: 'New York', code: 'NY'},
            {name: 'Rome', code: 'RM'},
            {name: 'London', code: 'LDN'},
            {name: 'Istanbul', code: 'IST'},
            {name: 'Paris', code: 'PRS'}
        ];
    }
    //#endregion
}
