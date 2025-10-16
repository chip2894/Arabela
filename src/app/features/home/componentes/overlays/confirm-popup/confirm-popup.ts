import { Component } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
    selector: 'app-confirm-popup',
    standalone: false,
    templateUrl: './confirm-popup.html',
    styles: ``,
})
export class ConfirmPopup {
    //#region Variables

    //#endregion

    //#region Constructor
    constructor(
        private confirmationService: ConfirmationService,
        private messageService: MessageService,
    ) {}
    //#endregion

    confirmPopup1(event: Event) {
        this.confirmationService.confirm({
            target: event.currentTarget as EventTarget,
            message: '¿Estás seguro que deseas continuar?',
            icon: 'pi pi-exclamation-triangle',
            acceptLabel: 'Continuar',
            rejectLabel: 'Cancelar',
            rejectButtonProps: {
                severity: 'secondary',
                outlined: true,
            },
            accept: () => {
                this.messageService.add({
                    severity: 'info',
                    summary: 'Confirmado',
                    detail: 'Has aceptado',
                    life: 3000,
                });
            },
            reject: () => {
                this.messageService.add({
                    severity: 'error',
                    summary: 'Rechazado',
                    detail: 'Has rechazado',
                    life: 3000,
                });
            },
            key: 'popup',
        });
    }

    confirmPopup2(event: Event) {
        this.confirmationService.confirm({
            target: event.currentTarget as EventTarget,
            message: '¿Quieres eliminar este registro?',
            icon: 'pi pi-info-circle',
            rejectLabel: 'No',
            rejectButtonProps: {
                severity: 'secondary',
                outlined: true,
            },
            acceptLabel: 'Sí, eliminar',
            acceptButtonProps: {
                severity: 'danger',
            },
            accept: () => {
                this.messageService.add({
                    severity: 'info',
                    summary: 'Confirmado',
                    detail: 'Registro eliminado',
                    life: 3000,
                });
            },
            reject: () => {
                this.messageService.add({
                    severity: 'error',
                    summary: 'Rechazado',
                    detail: 'Has rechazado',
                    life: 3000,
                });
            },
            key: 'popup',
        });
    }

    confirm(event: Event) {
        this.confirmationService.confirm({
            target: event.target as EventTarget,
            message: 'Por favor, confirme para continuar.',
            icon: 'pi pi-bell',
            rejectLabel: 'No',
            rejectButtonProps: {
                icon: 'pi pi-times',
                label: 'Rechazar',
                outlined: true,
            },
            acceptLabel: 'Sí',
            acceptButtonProps: {
                icon: 'pi pi-check',
                label: 'Confirmar',
            },
            accept: () => {
                this.messageService.add({
                    severity: 'info',
                    summary: 'Confirmado',
                    detail: 'Has aceptado',
                    life: 3000,
                });
            },
            reject: () => {
                this.messageService.add({
                    severity: 'error',
                    summary: 'Rechazado',
                    detail: 'Has rechazado',
                    life: 3000,
                });
            },
            key: 'popup1',
        });
    }
}
