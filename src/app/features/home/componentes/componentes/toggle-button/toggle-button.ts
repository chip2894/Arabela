import { Component } from '@angular/core';

@Component({
  selector: 'app-toggle-button',
  standalone: false,
  templateUrl: './toggle-button.html',
  styles: ``
})
export class ToggleButton {
    //#region Variables
    checked: boolean = false;
    checked1: boolean = false;
    //#endregion
}
