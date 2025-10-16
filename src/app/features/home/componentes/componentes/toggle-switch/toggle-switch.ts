import { Component } from '@angular/core';

@Component({
  selector: 'app-toggle-switch',
  standalone: false,
  templateUrl: './toggle-switch.html',
  styles: ``
})
export class ToggleSwitch {
    //#region Variables
    checked: boolean = false;
    checked1: boolean = true;
    checked2: boolean = false;
    //#endregion
}
