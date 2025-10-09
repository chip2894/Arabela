import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface imagenesModel {
  itemImageSrc: string;
  alt: string;
  title: string;
}

@Component({
  selector: 'app-not-found',
  standalone: false,
  templateUrl: './not-found.html',
  styleUrl: './not-found.scss'
})
export class NotFound {

  constructor(private router: Router) { }

  goHome() {
    this.router.navigate(['/']);
  }
}
