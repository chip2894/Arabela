import { Component } from '@angular/core';

interface Column {
  field: string;
  header: string;
  customExportHeader?: string;
}

interface Articulo {
  clave: string;
  nombre: string;
  estatus: boolean;
}

@Component({
  selector: 'app-tabla-filtros',
  standalone: false,
  templateUrl: './tabla-filtros.html'
})
export class TablaFiltros {
  // #region Variables Globales

  cols!: Column[];

  articulos!: Articulo[];

  articulo!: Articulo;

  cargando: boolean = true;

  // #endregion Variables Globales

  // #region Constructor

  constructor() { }

  // #endregion Constructor

  // #region Ciclo de Vida

  ngOnInit(): void {
    this.articulos = [
      { clave: "P800", nombre: "Crema", estatus: true },
      { clave: "P801", nombre: "Crema 1", estatus: true },
      { clave: "P802", nombre: "Crema 2", estatus: true },
      { clave: "P804", nombre: "Crema 3", estatus: true },
      { clave: "P805", nombre: "Crema 4", estatus: true },
      { clave: "P803", nombre: "Crema 5", estatus: false },
      { clave: "P806", nombre: "Crema 6", estatus: true },
      { clave: "P807", nombre: "Crema 7", estatus: true },
      { clave: "P808", nombre: "Crema 8", estatus: true },
      { clave: "P809", nombre: "Crema 9", estatus: true },
      { clave: "P810", nombre: "Crema 10", estatus: true },
      { clave: "P811", nombre: "Crema 11", estatus: true },
      { clave: "P812", nombre: "Crema 12", estatus: true },
      { clave: "P813", nombre: "Crema 13", estatus: true },
      { clave: "P814", nombre: "Crema 14", estatus: false },
      { clave: "P815", nombre: "Crema 15", estatus: true },
      { clave: "P816", nombre: "Crema 16", estatus: true },
      { clave: "P817", nombre: "Crema 17", estatus: false },
      { clave: "P818", nombre: "Crema 18", estatus: true },
      { clave: "P819", nombre: "Crema 19", estatus: true },
    ];
    this.cargarTabla();
  }

  // #endregion Ciclo de Vida

  // #region Metodos

  cargarTabla(): void {
    this.cols = [
      { field: 'clave', header: 'Código Artículo', customExportHeader: 'Código Artículo' },
      { field: 'nombre', header: 'Artículo', customExportHeader: 'Artículo' },
      { field: 'estatus', header: 'Estatus', customExportHeader: 'Estatus' },
    ]
    this.cargando = false;
  }

  // #endregion Metodos
}