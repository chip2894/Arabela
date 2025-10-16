import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styles: ``
})
export class Home {
  //#region Variables
  sidebarOpen = true;
  isMobile = false;
  //#endregion

  constructor(){

  }

  @HostListener('window:resize')
  onResize(){
    this.checkScreen();
  }

  checkScreen() {
    this.isMobile = window.innerWidth < 768;
    this.sidebarOpen = !this.isMobile ? true : false;
  }

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }
}
