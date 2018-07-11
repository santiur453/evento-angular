import { Injectable } from '@angular/core'

@Injectable()
export class EventosService {
    obtenerEventos(){
        return EVENTOS;
    }
}

const EVENTOS = [
    {
        id: 1,
        nombre: 'Conferencia Angular',
        fecha: '20/08/2018',
        imagenUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
        descripcion: 'Un Super evento de Angular',
        ciudad: 'Bogota'
    },
    {
        id: 1,
        nombre: 'Conferencia Angular',
        fecha: '20/08/2018',
        imagenUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
        descripcion: 'Un Super evento de Angular',
        ciudad: 'Bogota'
    },
    {
        id: 1,
        nombre: 'Conferencia Angular',
        fecha: '20/08/2018',
        imagenUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
        descripcion: 'Un Super evento de Angular',
        ciudad: 'Bogota'
    },
    {
        id: 1,
        nombre: 'Conferencia Angular',
        fecha: '20/08/2018',
        imagenUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
        descripcion: 'Un Super evento de Angular',
        ciudad: 'Bogota'
    },
    {
        id: 1,
        nombre: 'Conferencia Angular',
        fecha: '20/08/2018',
        imagenUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
        descripcion: 'Un Super evento de Angular',
        ciudad: 'Bogota'
    },
    {
        id: 1,
        nombre: 'Conferencia Angular',
        fecha: '20/08/2018',
        imagenUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
        descripcion: 'Un Super evento de Angular',
        ciudad: 'Bogota'
    }
]
