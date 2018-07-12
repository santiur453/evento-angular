import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListaEventosComponent } from './eventos/lista-eventos.component';
import { MaterialModule } from './compartida/material.module';
import { TarjetaEventoComponent } from './eventos/tarjeta-evento.component';
import { EventosService } from './eventos/servicios/eventos.service';
import { DetalleEventoComponent } from './eventos/detalle-evento.component';
import { RouterModule, Routes }  from '@angular/router';
import { appRutas } from './rutas';



@NgModule({
  declarations: [
    AppComponent,
    ListaEventosComponent,
    TarjetaEventoComponent,
    DetalleEventoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRutas),
    MaterialModule
  ],
  providers: [ EventosService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
