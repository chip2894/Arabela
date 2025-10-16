import { Component } from '@angular/core';

@Component({
  selector: 'app-textarea',
  standalone: false,
  templateUrl: './textarea.html',
  styles: ``
})
export class Textarea {
    //#region Variables
    value!: string;
    //#endregion

    //#region Constructor
    constructor(){}
    //#endregion
}
