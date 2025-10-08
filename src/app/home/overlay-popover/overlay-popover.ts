import { Component } from '@angular/core';

@Component({
  selector: 'app-overlay-popover',
  standalone: false,
  templateUrl: './overlay-popover.html',
  styleUrl: './overlay-popover.scss'
})
export class OverlayPopover {
  members = [
    { name: 'Amy Elsner', image: 'amyelsner.png', email: 'amy@email.com', role: 'Owner' },
    { name: 'Bernardo Dominic', image: 'bernardodominic.png', email: 'bernardo@email.com', role: 'Editor' },
    { name: 'Ioni Bowcher', image: 'ionibowcher.png', email: 'ioni@email.com', role: 'Viewer' }
  ];
}
