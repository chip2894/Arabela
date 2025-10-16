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
    categoria: string;
    costoPromedio: number;
}

@Component({
    selector: 'app-tabla-fila-estatica',
    standalone: false,
    templateUrl: './tabla-fila-estatica.html',
    styles: ``,
})
export class TablaFilaEstatica {
    // #region Variables Globales

    cols!: Column[];

    articulos!: Articulo[];

    articulo!: Articulo;

    cargando: boolean = true;

    // #endregion Variables Globales

    // #region Constructor

    constructor() {}

    // #endregion Constructor

    // #region Ciclo de Vida

    ngOnInit(): void {
        this.articulos = [
            {
                clave: 'K2732',
                nombre: 'ARABELA ILY BEAUTY, MAGIC LIP OIL ACEITE HIDRATANTE PARA LABIOS SANDIA 3 ML',
                estatus: true,
                categoria: 'K',
                costoPromedio: 15.99,
            },
            {
                clave: 'F1047',
                nombre: 'THALIA SODI GODDESS FRAGANCIA CON ATOMIZADOR P/DAMA 50 ML',
                estatus: true,
                categoria: 'F',
                costoPromedio: 15.99,
            },
            { clave: 'M16573', nombre: 'D', estatus: true, categoria: 'W', costoPromedio: 15.99 },
            {
                clave: 'K151',
                nombre: 'CRAZY COLORS MASCARA PARA PESTAÑAS CON DESTELLOS AZUL 8 g',
                estatus: true,
                categoria: 'K',
                costoPromedio: 15.99,
            },
            {
                clave: 'K152',
                nombre: 'CRAZY COLORS MASCARA PARA PESTAÑAS CON DESTELLOS MORADO 8 g',
                estatus: true,
                categoria: 'K',
                costoPromedio: 15.99,
            },
            {
                clave: '1324A',
                nombre: 'FOLLETO DE VENTAS C13/2024 GUATEMALA ',
                estatus: true,
                categoria: 'Y',
                costoPromedio: 15.99,
            },
            {
                clave: 'B546',
                nombre: 'ARABELA SEDUZIONE DESODORANTE ANTITRANSPIRANTE ROLL-ON PARA CABALLERO 90 g',
                estatus: true,
                categoria: 'B',
                costoPromedio: 15.99,
            },
            {
                clave: 'B67',
                nombre: 'ARABELA TORMENTA DESODORANTE ANTITRANSPIRANTE ROLL-ON PARA CABALLERO 90 g',
                estatus: true,
                categoria: 'B',
                costoPromedio: 15.99,
            },
            {
                clave: '1324S',
                nombre: 'FOLLETO CAMPAÑA 13/2024',
                estatus: true,
                categoria: 'X',
                costoPromedio: 15.99,
            },
            {
                clave: 'TRDX8',
                nombre: 'I) ARABELA, LENTES NEGROS UNISEX, MATERIAL: LENTES: POLICARB',
                estatus: true,
                categoria: 'L',
                costoPromedio: 15.99,
            },
            {
                clave: 'TFL16',
                nombre: '(I) PORTA RETRATOS, MATERIAL: ACRILICO CON ADHERIBLE, CONTENIDO: 1 JUEGO',
                estatus: true,
                categoria: 'T',
                costoPromedio: 15.99,
            },
            {
                clave: 'TFL24',
                nombre: '(I) BANCO PLEGABLE, MATERIAL: PLASTICO, CONTENIDO: 1 PIEZA',
                estatus: true,
                categoria: 'T',
                costoPromedio: 15.99,
            },
            {
                clave: 'TKA97',
                nombre: '(I) JUEGO DE TABLAS FLEXIBLES PARA PICAR, FRUTITAS, MATERIAL: PLASTICO, CONTENIDO: 1 JUEGO DE 4 PIEZAS',
                estatus: true,
                categoria: 'T',
                costoPromedio: 15.99,
            },
            {
                clave: 'TKB08',
                nombre: '(I) MOLDES PARA GALLETAS 6 PZAS ',
                estatus: true,
                categoria: 'T',
                costoPromedio: 15.99,
            },
            {
                clave: 'TKB22',
                nombre: '(I) JUEGO DE 3 OLLAS CON TAPAS,  MATERIAL: ACERO INOXIDABLE, CONTENIDO: 1 JUEGO DE 3 PIEZAS',
                estatus: true,
                categoria: 'T',
                costoPromedio: 15.99,
            },
            {
                clave: 'TA413',
                nombre: '(I) JUEGO DE CEPILLOS DE LIMPIEZA, MATERIAL: PLASTICO, CONTENIDO: 1 JUEGO DE 2 PIEZAS',
                estatus: true,
                categoria: 'T',
                costoPromedio: 15.99,
            },
            { clave: 'NB43', nombre: '???', estatus: true, categoria: 'W', costoPromedio: 15.99 },
            { clave: 'B114', nombre: '???', estatus: true, categoria: 'W', costoPromedio: 15.99 },
            { clave: 'B12223', nombre: '???', estatus: true, categoria: 'W', costoPromedio: 15.99 },
            {
                clave: 'J817S',
                nombre: '(HAE) CARTERA PARA CABALLERO ANIBAL, CONTENIDO 1 P',
                estatus: true,
                categoria: 'J',
                costoPromedio: 15.99,
            },
            { clave: 'LAN3', nombre: '???', estatus: true, categoria: 'W', costoPromedio: 15.99 },
            { clave: 'LAN84', nombre: '???', estatus: true, categoria: 'W', costoPromedio: 15.99 },
            {
                clave: 'NA478',
                nombre: 'ARABELA JUEGO DE PLATOS DE COLORES CON POPOTE. MATERIAL PLAS',
                estatus: true,
                categoria: 'N',
                costoPromedio: 15.99,
            },
            { clave: 'NB', nombre: '???', estatus: true, categoria: 'W', costoPromedio: 15.99 },
            {
                clave: 'NB02',
                nombre: '(I) CEPILLO DE DIENTES PINGU PARA NIÑO, MATERIAL P',
                estatus: true,
                categoria: 'O',
                costoPromedio: 15.99,
            },
            { clave: 'NB0555', nombre: 'G', estatus: true, categoria: 'W', costoPromedio: 15.99 },
            { clave: 'NB22', nombre: '???', estatus: true, categoria: 'W', costoPromedio: 15.99 },
            { clave: 'NB27', nombre: '???', estatus: true, categoria: 'W', costoPromedio: 15.99 },
            {
                clave: 'NB29',
                nombre: '(I) BRAZALETE LUMINOSO PEZ , MATERIAL: PLASTICO, CONTENIDO 1',
                estatus: true,
                categoria: 'W',
                costoPromedio: 15.99,
            },
            { clave: 'NT04', nombre: 'H', estatus: true, categoria: 'W', costoPromedio: 15.99 },
            {
                clave: 'TRDG2',
                nombre: '(I) ARABELA, GORRA IRENE, TALLA UNITALLA, MATERIAL: ALGODÓN,',
                estatus: true,
                categoria: 'L',
                costoPromedio: 15.99,
            },
            { clave: 'TRDJ', nombre: '???', estatus: true, categoria: 'W', costoPromedio: 15.99 },
            {
                clave: 'C1421A',
                nombre: 'FOLLETO DE VENTAS C14/2021 GUATEMALA',
                estatus: true,
                categoria: 'Y',
                costoPromedio: 15.99,
            },
            { clave: 'C1597', nombre: '???', estatus: true, categoria: 'W', costoPromedio: 15.99 },
            { clave: 'C38E', nombre: '???', estatus: true, categoria: 'T', costoPromedio: 15.99 },
            {
                clave: 'C1021A',
                nombre: 'FOLLETO DE VENTAS C10/2021 GUATEMALA ',
                estatus: true,
                categoria: 'Y',
                costoPromedio: 15.99,
            },
            {
                clave: 'C1021S',
                nombre: 'FOLLETO DE VENTAS C10/2021 EL SALVADOR ',
                estatus: true,
                categoria: 'Y',
                costoPromedio: 15.99,
            },
            { clave: 'GQ970', nombre: '-', estatus: true, categoria: 'F', costoPromedio: 15.99 },
            {
                clave: 'JC05D',
                nombre: 'PULSERA LETRA A, MATERIAL: METAL Y POLIESTER, CONTENIDO: 1 P',
                estatus: true,
                categoria: 'J',
                costoPromedio: 15.99,
            },
            { clave: 'MM377', nombre: '???', estatus: true, categoria: 'W', costoPromedio: 15.99 },
            { clave: 'MM77', nombre: '???', estatus: true, categoria: 'W', costoPromedio: 15.99 },
            { clave: 'N580', nombre: 'HJ', estatus: true, categoria: 'N', costoPromedio: 15.99 },
            { clave: 'F', nombre: '???', estatus: true, categoria: 'W', costoPromedio: 15.99 },
            { clave: 'F0925', nombre: '???', estatus: true, categoria: 'W', costoPromedio: 15.99 },
            { clave: 'TFD4D', nombre: '???', estatus: true, categoria: 'W', costoPromedio: 15.99 },
            { clave: 'TFDD4', nombre: '???', estatus: true, categoria: 'W', costoPromedio: 15.99 },
            {
                clave: 'MM1129',
                nombre: 'AMOURETT, COLECCIÓN DE SOMBRAS 10G ',
                estatus: true,
                categoria: 'M',
                costoPromedio: 15.99,
            },
            {
                clave: 'MM1315',
                nombre: 'NPB OLIVO, LABIAL LÍQUIDO RASPERRY',
                estatus: true,
                categoria: 'M',
                costoPromedio: 15.99,
            },
            {
                clave: 'MM207',
                nombre: '}SA,MCM',
                estatus: true,
                categoria: 'W',
                costoPromedio: 15.99,
            },
            {
                clave: 'NT101E',
                nombre: '(I) MOCHILA PRINCESAS',
                estatus: true,
                categoria: 'O',
                costoPromedio: 15.99,
            },
        ];
        this.cargarTabla();
    }

    // #endregion Ciclo de Vida

    // #region Metodos

    cargarTabla(): void {
        this.cols = [
            { field: 'clave', header: 'Código Artículo', customExportHeader: 'Código Artículo' },
            { field: 'nombre', header: 'Artículo', customExportHeader: 'Artículo' },
            { field: 'categoria', header: 'Categoría', customExportHeader: 'Categoría' },
            {
                field: 'costoPromedio',
                header: 'Costo Promedio',
                customExportHeader: 'Costo Promedio',
            },
            { field: 'estatus', header: 'Estatus', customExportHeader: 'Estatus' },
        ];
        this.cargando = false;
    }

    // #endregion Metodos
}
