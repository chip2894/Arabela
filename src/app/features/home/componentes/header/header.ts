import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.html',
  styles: ``
})
export class Header {
  //#region Variables
  @Output() toggleSidebar = new EventEmitter<void>();
  usuario = 'José Luis Castro Serrato';
  //#endregion

  constructor(private router: Router){

  }

  goHome() {
    this.router.navigate(['/home']);
  }

  logout() {
    this.router.navigate(['/login']);
  }
}
