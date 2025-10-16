import { Component, ViewChild } from '@angular/core';
import { MessageService } from 'primeng/api';
import { FileUpload, FileUploadEvent } from 'primeng/fileupload';

@Component({
  selector: 'app-upload',
  standalone: false,
  templateUrl: './upload.html',
  styles: ``
})
export class Upload {
  @ViewChild('fileUpload') fileUpload!: FileUpload;

  uploadedFiles: File[] = [];

  allowedTypes = ['.sql', '.txt', '.csv', '.zip', '.pdf', 'image/*'];

  allowedTypesString = this.allowedTypes.join(', ');

  maxFileSizeMb = 10;

  maxFileSize = this.maxFileSizeMb * 1024 * 1024;

  constructor(private messageService: MessageService) { }

  onUpload(event: any) {
    // Guardar archivos subidos
    this.uploadedFiles.push(...event.files);

    // Limpiar el componente
    this.fileUpload.clear();

    // Mostrar mensaje de éxito
    this.messageService.add({
      severity: 'info',
      summary: 'Archivo(s) subido(s)',
      detail: `${event.files.length} archivo(s) cargado(s) correctamente.`
    });
  }

  onSelect(event: any) {
    // Validación opcional de tamaño
    event.files.forEach((file: File) => {
      if (file.size > this.maxFileSize) {
        this.messageService.add({
          severity: 'error',
          summary: 'Archivo demasiado grande ',
          detail: `${file.name} excede el tamaño máximo de 10 MB.`
        });
        // Remover archivo de la lista
        event.files = event.files.filter((f: File) => f !== file);
      }
    });
  }
}
