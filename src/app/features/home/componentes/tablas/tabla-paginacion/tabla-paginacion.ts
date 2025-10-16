import { Component, OnInit, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { jsPDF } from 'jspdf';
import { saveAs } from 'file-saver';
import * as XLSX from 'xlsx';
import autoTable from 'jspdf-autotable';
import { ConfirmationService, MessageService } from 'primeng/api';

interface Column {
    field: string;
    header: string;
    customExportHeader?: string;
}

interface Articulo {
    clave: string;
    nombre: string;
    imagen: string;
}

@Component({
    selector: 'app-tabla-paginacion',
    standalone: false,
    templateUrl: './tabla-paginacion.html',
    styles: ``,
})
export class TablaPaginacion implements OnInit {
    cols!: Column[];

    articulos!: Articulo[];

    articulo!: Articulo;

    cargando: boolean = true;

    activityValues: number[] = [0, 100];

    @ViewChild('dt') dt!: Table;

    constructor(
        private messageService: MessageService,
        private confirmationService: ConfirmationService,
    ) {}

    ngOnInit(): void {
        this.articulos = [
            {
                clave: 'P1026',
                nombre: 'PIEL DE PORCELANA Crema limpiadora con polvo de arroz 100g',
                imagen: 'https://www.arabela.com/_next/image?url=https%3A%2F%2Fapi.arabela.com%2Fuploads%2FP1026_6abbf0eee6.png&w=1920&q=75',
            },
            {
                clave: 'P535',
                nombre: 'PIEL DE PORCELANA Jabón con polvo de arroz 2 piezas de 50 g c/u',
                imagen: 'https://www.arabela.com/_next/image?url=https%3A%2F%2Fapi.arabela.com%2Fuploads%2FP535_b60ba77918.png&w=1920&q=75',
            },
            {
                clave: 'P536',
                nombre: 'PIEL DE PORCELANA Mascarilla facial con polvo de arroz 50 g',
                imagen: 'https://www.arabela.com/_next/image?url=https%3A%2F%2Fapi.arabela.com%2Fuploads%2FP536_73a9418281.png&w=1920&q=75',
            },
            {
                clave: 'P537',
                nombre: 'PIEL DE PORCELANA Crema facial con polvo de arroz 70 g',
                imagen: 'https://www.arabela.com/_next/image?url=https%3A%2F%2Fapi.arabela.com%2Fuploads%2FP537_b72d4bbeb5.png&w=1920&q=75',
            },
            {
                clave: 'P543',
                nombre: 'Baba de Caracol + ELIXIR Crema facial multifuncional con baba de caracol + elixir 75 g',
                imagen: 'https://www.arabela.com/_next/image?url=https%3A%2F%2Fapi.arabela.com%2Fuploads%2FP543_08c2b3602c.png&w=1920&q=75',
            },
            {
                clave: 'P642',
                nombre: 'Baba de Caracol + ELIXIR Natural skin bálsamo reparador y protector de labios con baba de caracol mas elixir 4g',
                imagen: 'https://www.arabela.com/_next/image?url=https%3A%2F%2Fapi.arabela.com%2Fuploads%2FP642_61789f05ee.png&w=1920&q=75',
            },
            {
                clave: 'P848',
                nombre: 'Arcilla aclaradora con concha nácar 50 g',
                imagen: 'https://www.arabela.com/_next/image?url=https%3A%2F%2Fapi.arabela.com%2Fuploads%2FP848_50dfeb2877.png&w=1920&q=75',
            },
            {
                clave: 'P850',
                nombre: 'Crema exfoliante con concha nácar',
                imagen: 'https://www.arabela.com/_next/image?url=https%3A%2F%2Fapi.arabela.com%2Fuploads%2FP850_103bd2c1ec.png&w=1920&q=75',
            },
            {
                clave: 'P1086',
                nombre: 'Jalea Real Concentrado facial 25 ml',
                imagen: 'https://www.arabela.com/_next/image?url=https%3A%2F%2Fapi.arabela.com%2Fuploads%2FP1086_65bc00ba5d.png&w=1920&q=75',
            },
            {
                clave: 'P728',
                nombre: 'Jalea Real Cápsulas faciales con jalea real y vitamina e, 30 cápsulas de 450 mg cada una',
                imagen: 'https://www.arabela.com/_next/image?url=https%3A%2F%2Fapi.arabela.com%2Fuploads%2FP728_401ee53b0a.png&w=1920&q=75',
            },
            {
                clave: 'P731',
                nombre: 'Jalea Real Crema facial multifuncional 75 g',
                imagen: 'https://www.arabela.com/_next/image?url=https%3A%2F%2Fapi.arabela.com%2Fuploads%2FP731_78b58f2fe2.png&w=1920&q=75',
            },
            {
                clave: 'P1096',
                nombre: 'Jalea Real Arabela Bálsamo para labios 4g',
                imagen: 'https://www.arabela.com/_next/image?url=https%3A%2F%2Fapi.arabela.com%2Fuploads%2FP1096_cd87a98bcf.png&w=1920&q=75',
            },
            {
                clave: 'P1012',
                nombre: 'Crema limpiadora con leche de burra 100 g',
                imagen: 'https://www.arabela.com/_next/image?url=https%3A%2F%2Fapi.arabela.com%2Fuploads%2FP1012_56c3661116.png&w=1920&q=75',
            },
            {
                clave: 'P926',
                nombre: 'Crema facial con leche de burra 70 g',
                imagen: 'https://www.arabela.com/_next/image?url=https%3A%2F%2Fapi.arabela.com%2Fuploads%2FP926_c21f05cd27.png&w=1920&q=75',
            },
            {
                clave: 'P818',
                nombre: 'Crema facial antiarrugas con péptidos de Veneno de Víbora 70 g',
                imagen: 'https://www.arabela.com/_next/image?url=https%3A%2F%2Fapi.arabela.com%2Fuploads%2FP818_d36c434f23.png&w=1920&q=75',
            },
            {
                clave: 'P865',
                nombre: 'Concentrado multifuncional anti-arrugas con péptidos de Veneno de Víbora 25 ml',
                imagen: 'https://www.arabela.com/_next/image?url=https%3A%2F%2Fapi.arabela.com%2Fuploads%2FP865_d1b3303ceb.png&w=1920&q=75',
            },
            {
                clave: 'P900',
                nombre: 'Crema efecto lifting inmediato con péptidos de Veneno de Víbora 12 g',
                imagen: 'https://www.arabela.com/_next/image?url=https%3A%2F%2Fapi.arabela.com%2Fuploads%2FP900_d22163ea06.png&w=1920&q=75',
            },
            {
                clave: 'P521',
                nombre: 'Sérum antiarrugas para contorno de ojos con Veneno de Víbora',
                imagen: 'https://www.arabela.com/_next/image?url=https%3A%2F%2Fapi.arabela.com%2Fuploads%2FP521_42fff6ea57.png&w=1920&q=75',
            },
            {
                clave: 'P1079',
                nombre: 'AGUACATE Crema nutritiva facial',
                imagen: 'https://www.arabela.com/_next/image?url=https%3A%2F%2Fapi.arabela.com%2Fuploads%2FP1079_acb3dcc07c.png&w=1920&q=75',
            },
            {
                clave: 'P1080',
                nombre: 'AGUACATE Sérum contorno de ojos',
                imagen: 'https://www.arabela.com/_next/image?url=https%3A%2F%2Fapi.arabela.com%2Fuploads%2FP1080_c097e7c876.png&w=1920&q=75',
            },
        ];
        this.cargarTabla();
    }

    cargarTabla() {
        this.cols = [
            { field: 'clave', header: 'Código Artículo', customExportHeader: 'Código Artículo' },
            { field: 'nombre', header: 'Artículo', customExportHeader: 'Artículo' },
        ];
        this.cargando = false;
    }

    exportToExcel() {
        const dataToExport: Articulo[] = this.dt.filteredValue ?? this.articulos;
        const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(dataToExport);
        const wb: XLSX.WorkBook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'Productos');
        const excelBuffer: any = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
        const data: Blob = new Blob([excelBuffer], { type: 'application/octet-stream' });
        saveAs(data, 'productos.xlsx');
    }

    async exportToPDF() {
        const doc = new jsPDF();

        const imgData =
            'data:image/png;base64,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';
        doc.addImage(imgData, 'PNG', 10, 5, 30, 15); // x, y, ancho, alto

        // Título
        doc.setFontSize(16);
        doc.text('Lista de Artículos', 50, 15); // ajusta x e y según la imagen

        // Preparar la tabla
        const dataToExport: Articulo[] = this.dt.filteredValue ?? this.articulos;
        const rows = dataToExport.map((a) => [a.clave, a.nombre]);

        autoTable(doc, {
            head: [this.cols.map((col) => col.customExportHeader || col.header)],
            body: rows,
            startY: 25, // deja espacio suficiente debajo de la imagen y el título
            styles: { fontSize: 10 },
            headStyles: { fillColor: [207, 50, 147] },
        });

        doc.save('productos.pdf');
    }

    editarArticulo(articulo: Articulo) {
        console.log(articulo);
    }

    eliminarArticulo(articulo: Articulo) {
        this.confirmationService.confirm({
            message: 'Esta acción no se puede deshacer, ¿desea continuar?',
            header: `¿Está seguro de que desea eliminar "${articulo.nombre}"?`,
            icon: 'pi pi-exclamation-triangle',
            rejectButtonProps: {
                label: 'No',
                severity: 'secondary',
                variant: 'text',
            },
            acceptButtonProps: {
                severity: 'danger',
                label: 'Sí',
            },
            accept: () => {
                this.articulos = this.articulos.filter((a) => a !== articulo);
                this.messageService.add({
                    severity: 'info',
                    summary: 'Éxito',
                    detail: `Artículo "${articulo.nombre}" eliminado`,
                    life: 3000,
                });
            },
        });
    }
}
