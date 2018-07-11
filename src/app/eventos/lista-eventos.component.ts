import {Component} from '@angular/core';
import { EventosService } from './servicios/eventos.service';

@Component({
    selector: 'lista-eventos',
    template: `
    <div class="contenedor">
        <tarjeta-evento *ngFor="let evento1 of eventos"
            [evento]="evento1" 
            >
        </tarjeta-evento>
    </div>   ` 
    ,
    styles: [`
        .contenedor {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
        }
    `]
})
export class ListaEventosComponent {
    eventos
    constructor(private eventosService: EventosService){
        this.eventos = eventosService.obtenerEventos();
    }
}