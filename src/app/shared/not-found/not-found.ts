import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: false,
  templateUrl: './not-found.html',
  styles: ``
})
export class NotFound {

  constructor(private router: Router) { }

  goHome() {
    this.router.navigate(['/']);
  }

}
