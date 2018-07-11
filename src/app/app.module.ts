import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListaEventosComponent } from './eventos/lista-eventos.component';
import { MaterialModule } from './compartida/material.module';
import { TarjetaEventoComponent } from './eventos/tarjeta-evento.component';
import { EventosService } from './eventos/servicios/eventos.service';



@NgModule({
  declarations: [
    AppComponent,
    ListaEventosComponent,
    TarjetaEventoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [ EventosService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
