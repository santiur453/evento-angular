import { Injectable } from '@angular/core'

@Injectable()
export class EventosService {
    obtenerEventos(){
        return EVENTOS;
    }

    obtenerEventoPorId(id: number){
        return EVENTOS.find( e => e.id === id);
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
        id: 2,
        nombre: 'Conferencia React',
        fecha: '20/08/2018',
        imagenUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
        descripcion: 'Un Super evento de Angular',
        ciudad: 'Bogota'
    },
    {
        id: 3,
        nombre: 'Conferencia Vue',
        fecha: '20/08/2018',
        imagenUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
        descripcion: 'Un Super evento de Angular',
        ciudad: 'Bogota'
    },
    {
        id: 4,
        nombre: 'Conferencia Ionic',
        fecha: '20/08/2018',
        imagenUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
        descripcion: 'Un Super evento de Angular',
        ciudad: 'Bogota'
    },
    {
        id: 5,
        nombre: 'Conferencia Rails',
        fecha: '20/08/2018',
        imagenUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
        descripcion: 'Un Super evento de Angular',
        ciudad: 'Bogota'
    },
    {
        id: 6,
        nombre: 'Conferencia Graphql',
        fecha: '20/08/2018',
        imagenUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
        descripcion: 'Un Super evento de Angular',
        ciudad: 'Bogota'
    }
]
