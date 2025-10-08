import { Component } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-overlay-popup',
  standalone: false,
  templateUrl: './overlay-popup.html',
  styleUrl: './overlay-popup.scss'
})
export class OverlayPopup {
  constructor(private confirmationService: ConfirmationService, private messageService: MessageService) { }

  confirmPopup1(event: Event) {
    this.confirmationService.confirm({
      target: event.currentTarget as EventTarget,
      message: '¿Estás seguro que deseas continuar?',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Continuar',
      rejectLabel: 'Cancelar',
      rejectButtonProps: {
        severity: 'secondary',
        outlined: true
      },
      accept: () => {
        this.messageService.add({ severity: 'info', summary: 'Confirmado', detail: 'Has aceptado', life: 3000 });
      },
      reject: () => {
        this.messageService.add({ severity: 'error', summary: 'Rechazado', detail: 'Has rechazado', life: 3000 });
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
        outlined: true
      },
      acceptLabel: 'Sí, eliminar',
      acceptButtonProps: {
        severity: 'danger'
      },
      accept: () => {
        this.messageService.add({ severity: 'info', summary: 'Confirmado', detail: 'Registro eliminado', life: 3000 });
      },
      reject: () => {
        this.messageService.add({ severity: 'error', summary: 'Rechazado', detail: 'Has rechazado', life: 3000 });
      },
      key: 'popup',
    });
  }
}
