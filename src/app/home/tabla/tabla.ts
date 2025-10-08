import { Component, OnInit, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';

interface Column {
  field: string;
  header: string;
  customExportHeader?: string;
}

interface Articulo {
  clave: string;
  nombre: string;
}

@Component({
  selector: 'app-tabla',
  standalone: false,
  templateUrl: './tabla.html',
  styleUrl: './tabla.scss'
})
export class Tabla implements OnInit {

  // #region Variables y Constantes de Clase

  cols!: Column[];

  articulos!: Articulo[];

  // #endregion

  constructor() { }

  ngOnInit(): void {
    this.cargarTabla();
    this.articulos = [
      { clave: 'A001', nombre: 'Artículo 1' },
      { clave: 'A002', nombre: 'Artículo 2' },
      { clave: 'A003', nombre: 'Artículo 3' },
      { clave: 'A004', nombre: 'Artículo 4' },
      { clave: 'A005', nombre: 'Artículo 5' }
    ];
  }

  cargarTabla(): void {
    this.cols = [
      { field: 'clave', header: 'Clave', customExportHeader: 'Clave Exportada' },
      { field: 'nombre', header: 'Nombre', customExportHeader: 'Nombre Exportado' }
    ];
  }

}
