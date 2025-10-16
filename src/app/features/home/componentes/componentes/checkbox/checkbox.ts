import { Component } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  standalone: false,
  templateUrl: './checkbox.html',
  styles: ``
})
export class Checkbox {
    //#region Variables
    checked: boolean = false;
    selectedCategories: any[] = [];
    categories: any[] = [
        { name: 'Accounting', key: 'A' },
        { name: 'Marketing', key: 'M' },
        { name: 'Production', key: 'P' },
        { name: 'Research', key: 'R' },
    ];
    checked1: boolean = false;
    checked2: boolean = true;
    //#endregion
    //#region Constructor
    constructor(){}
    //#endregion
    //#region Ciclos de Vida
    ngOnInit() {
        this.selectedCategories = [this.categories[1]];
    }
    //#endregion
}
