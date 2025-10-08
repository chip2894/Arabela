import { Component } from '@angular/core';

@Component({
    selector: 'app-overlay-modal',
    standalone: false,
    templateUrl: './overlay-modal.html',
    styleUrl: './overlay-modal.scss'
})
export class OverlayModal {
    visible: boolean = false;
    visibleHf: boolean = false;
    visibleMaximizable: boolean = false;

    showDialog() {
        this.visible = true;
    }

    showDialogHeaderFooter() {
        this.visibleHf = true;
    }

    showDialogMaximizable() {
        this.visibleMaximizable = true;
    }
}
