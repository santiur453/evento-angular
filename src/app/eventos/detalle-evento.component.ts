import {Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventosService } from './servicios/eventos.service';

@Component({
    selector: 'detalle-evento',
    template: `
        <h1> Detalle del evento  </h1>
        <h2> {{evento.nombre}}</h2>
    `
})
export class DetalleEventoComponent implements OnInit {
    evento
    constructor(
        private route: ActivatedRoute,
        private servicioEventos : EventosService
    ){}

    ngOnInit() {
        const id:number = +this.route.snapshot.params['id'];
        this.evento = this.servicioEventos.obtenerEventoPorId(id);
    }
}
