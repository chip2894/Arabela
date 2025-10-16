import { Component, OnInit } from '@angular/core';

interface Campania {
  name: string;
  code: number;
}

interface Follteto {
  name: string;
  code: number;
}

interface Country {
    name: string;
    code: string;
}

@Component({
  selector: 'app-filtro',
  standalone: false,
  templateUrl: './filtro.html',
  styles: ``
})
export class Filtro implements OnInit {
  countries: Country[] | undefined;
  selectedCountry: string | undefined;
  date: Date[] | undefined;
  minDate: Date;
  maxDate: Date;

  campania: Campania[] | undefined;
  selectedCampania: number | undefined;

  folleto: Follteto[] | undefined;
  selectedFolleto: string | undefined;

  constructor(){
    const currentYear = new Date().getFullYear();

    // Mínimo: 5 años atrás
    this.minDate = new Date(currentYear - 5, 0, 1);

    // Máximo: 1 año después
    this.maxDate = new Date(currentYear + 1, 11, 31);

      this.campania = Array.from({ length: 26 }, (_, i) => ({
      name: `Campaña ${i + 1}`,
      code: i + 1
    }));
  }

  ngOnInit() {
      this.countries = [
          { name: 'México', code: 'MX' },
          { name: 'Guatemala', code: 'GU' },
          { name: 'El Salvador', code: 'SL' },
          { name: 'Honduras', code: 'HN' },
          { name: 'Nicaragua', code: 'NI' },
          { name: 'Panamá', code: 'PM' },
          { name: 'Costa Rica', code: 'CR' }
      ];

      this.folleto = [
        { name: 'Principal', code: 1},
        { name: 'Folleto Sensual', code: 2},
      ]
  }

}
