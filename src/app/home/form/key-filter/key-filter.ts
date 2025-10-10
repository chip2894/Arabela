import { Component } from '@angular/core';

@Component({
  selector: 'app-key-filter',
  standalone: false,
  templateUrl: './key-filter.html',
  styles: ``
})
export class KeyFilter {
      blockSpace: RegExp = /^[^\s]+$/;
      blockChars: RegExp = /^[^<>*!]+$/;
}
