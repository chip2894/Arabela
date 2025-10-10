import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  standalone: false,
  templateUrl: './checkbox.html',
  styles: ``
})
export class Checkbox implements OnInit {
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

    ngOnInit() {
        this.selectedCategories = [this.categories[1]];
    }
}
