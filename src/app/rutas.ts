import { Routes } from '@angular/router';
import { ListaEventosComponent } from './eventos/lista-eventos.component';
import { DetalleEventoComponent } from './eventos/detalle-evento.component';
import { NuevoEventoComponent } from './eventos/nuevo/nuevo.component';

export const appRutas:Routes = [
    { path: 'eventos', component: ListaEventosComponent},
    { path: 'eventos/nuevo', component: NuevoEventoComponent},
    { path: 'eventos/:id', component: DetalleEventoComponent},
    { path: '', redirectTo: 'eventos', pathMatch: 'full'}
];