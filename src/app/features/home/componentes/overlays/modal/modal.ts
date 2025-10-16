import { Component } from '@angular/core';

@Component({
    selector: 'app-modal',
    standalone: false,
    templateUrl: './modal.html',
    styles: ``,
})
export class Modal {
    //#region Variables
    visible: boolean = false;
    visibleHf: boolean = false;
    visiblePosition: boolean = false;
    visibleMaximizable: boolean = false;
    visibleLong: boolean = false;
    position:
        | 'left'
        | 'right'
        | 'top'
        | 'bottom'
        | 'center'
        | 'topleft'
        | 'topright'
        | 'bottomleft'
        | 'bottomright' = 'center';
    //#endregion

    showDialog() {
        this.visible = true;
    }

    showDialogHeaderFooter() {
        this.visibleHf = true;
    }

    showDialogPosition(
        position:
            | 'left'
            | 'right'
            | 'top'
            | 'bottom'
            | 'center'
            | 'topleft'
            | 'topright'
            | 'bottomleft'
            | 'bottomright',
    ) {
        this.position = position;
        this.visiblePosition = true;
    }

    showDialogMaximizable() {
        this.visibleMaximizable = true;
    }

    showDialogLong() {
        this.visibleLong = true;
    }
}
