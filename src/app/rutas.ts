import { Routes } from '@angular/router';
import { ListaEventosComponent } from './eventos/lista-eventos.component';
import { DetalleEventoComponent } from './eventos/detalle-evento.component';

export const appRutas:Routes = [
    { path: 'eventos', component: ListaEventosComponent},
    { path: 'eventos/:id', component: DetalleEventoComponent},
    { path: '', redirectTo: 'eventos', pathMatch: 'full'}
];