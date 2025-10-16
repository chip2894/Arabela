import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, map } from 'rxjs';

@Component({
  selector: 'app-footer',
  standalone: false,
  templateUrl: './footer.html',
  styles: ``
})
export class Footer implements OnInit, OnDestroy {
  version = '1.0.0';
  usuario = 'José Luis Castro Serrato';
  perfil = 'Administrador';
private dias = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

  fechaActual$ = interval(1000).pipe(
    map(() => {
      const ahora = new Date();
      const diaSemana = this.dias[ahora.getDay()];
      const dia = ahora.getDate().toString().padStart(2, '0');
      const mes = (ahora.getMonth() + 1).toString().padStart(2, '0');
      const año = ahora.getFullYear();
      const h = ahora.getHours();
      const horas = ((h % 12) || 12).toString().padStart(2, '0');
      const minutos = ahora.getMinutes().toString().padStart(2, '0');
      const segundos = ahora.getSeconds().toString().padStart(2, '0');
      const ampm = h >= 12 ? 'PM' : 'AM';
      return `${diaSemana}, ${dia}/${mes}/${año} ${horas}:${minutos}:${segundos} ${ampm}`;
    })
  );

  private intervalId!: any;

  ngOnInit() {
    
  }

  ngOnDestroy() {
    // Limpiar el intervalo al destruir el componente
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
