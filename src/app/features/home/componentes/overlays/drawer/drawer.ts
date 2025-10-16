import { Component } from '@angular/core';

@Component({
    selector: 'app-drawer',
    standalone: false,
    templateUrl: './drawer.html',
    styles: ``,
})
export class Drawer {
    //#region Variables
    visible: boolean = false;

    visible1: boolean = false;

    visible2: boolean = false;

    visible3: boolean = false;

    visible4: boolean = false;

    visibleTemplate: boolean = false;

    visibleMax: boolean = false;

    visibleCustom: boolean = false;
    //#endregion
}
