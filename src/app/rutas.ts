import { Routes } from '@angular/router';
import { ListaEventosComponent } from './eventos/lista-eventos.component';

export const appRutas:Routes = [
    { path: 'eventos', component: ListaEventosComponent},
    { path: '', redirectTo: 'eventos', pathMatch: 'full'}
];