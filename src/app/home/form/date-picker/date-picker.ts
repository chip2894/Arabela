import { Component } from '@angular/core';

@Component({
  selector: 'app-date-picker',
  standalone: false,
  templateUrl: './date-picker.html',
  styles: ``
})
export class DatePicker {
    date: Date | undefined;

    date1: Date | undefined;

    date2: Date | undefined;

    date3: Date | undefined;

    rangeDates: Date[] | undefined;
}
