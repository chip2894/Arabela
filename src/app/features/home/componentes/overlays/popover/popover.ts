import { Component } from '@angular/core';

@Component({
    selector: 'app-popover',
    standalone: false,
    templateUrl: './popover.html',
    styles: ``,
})
export class Popover {
    //#region Variables
    members = [
        { name: 'Amy Elsner', image: 'amyelsner.png', email: 'amy@email.com', role: 'Owner' },
        {
            name: 'Bernardo Dominic',
            image: 'bernardodominic.png',
            email: 'bernardo@email.com',
            role: 'Editor',
        },
        { name: 'Ioni Bowcher', image: 'ionibowcher.png', email: 'ioni@email.com', role: 'Viewer' },
    ];
    //#endregion
}
