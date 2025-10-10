import { Component, OnInit } from '@angular/core';

interface City {
    name: string;
    code: string;
}

interface Country {
    name: string;
    code: string;
}

@Component({
  selector: 'app-input-select',
  standalone: false,
  templateUrl: './input-select.html',
  styles: ``
})
export class InputSelect implements OnInit {

    countries: Country[] | undefined;
    cities: City[] | undefined;

    selectedCountry: string | undefined;
    selectedCity: City | undefined;

    ngOnInit() {
        this.countries = [
            { name: 'Australia', code: 'AU' },
            { name: 'Brazil', code: 'BR' },
            { name: 'China', code: 'CN' },
            { name: 'Egypt', code: 'EG' },
            { name: 'France', code: 'FR' },
            { name: 'Germany', code: 'DE' },
            { name: 'India', code: 'IN' },
            { name: 'Japan', code: 'JP' },
            { name: 'Spain', code: 'ES' },
            { name: 'United States', code: 'US' }
        ];
        this.cities = [
            { name: 'New York', code: 'NY' },
            { name: 'Rome', code: 'RM' },
            { name: 'London', code: 'LDN' },
            { name: 'Istanbul', code: 'IST' },
            { name: 'Paris', code: 'PRS' }
        ];
    }
}
