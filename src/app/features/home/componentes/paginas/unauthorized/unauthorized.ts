import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-unauthorized',
    standalone: false,
    templateUrl: './unauthorized.html',
    styles: ``,
})
export class Unauthorized {
    constructor(private router: Router) {}

    goHome() {
        this.router.navigate(['/']);
    }
}
