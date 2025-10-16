import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-radio',
  standalone: false,
  templateUrl: './radio.html',
  styles: ``
})
export class Radio implements OnInit{
    //#region  Variables
    selectedCategory: any = null;
    categories: any[] = [
        { name: 'Accounting', key: 'A' },
        { name: 'Marketing', key: 'M' },
        { name: 'Production', key: 'P' },
        { name: 'Research', key: 'R' }
    ];
    //#endregion

    //#region Constructor
    constructor(){}
    //#endregion

    //#region Ciclo de Vida
    ngOnInit() {
        this.selectedCategory = this.categories[1];
    }
    //#endregion
}
