import { Component } from '@angular/core';

@Component({
  selector: 'app-datepicker',
  standalone: false,
  templateUrl: './datepicker.html',
  styles: ``
})
export class Datepicker {
    //#region Variables
        date: Date | undefined;

        date1: Date | undefined;

        date2: Date | undefined;

        date3: Date | undefined;

        rangeDates: Date[] | undefined;
    //#endregion
}
