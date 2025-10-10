import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-radio-button',
  standalone: false,
  templateUrl: './radio-button.html',
  styles: ``
})
export class RadioButton implements OnInit{
    selectedCategory: any = null;

    categories: any[] = [
        { name: 'Accounting', key: 'A' },
        { name: 'Marketing', key: 'M' },
        { name: 'Production', key: 'P' },
        { name: 'Research', key: 'R' }
    ];

    ngOnInit() {
        this.selectedCategory = this.categories[1];
    }
}
