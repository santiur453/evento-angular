import { Component, Input } from '@angular/core';

@Component({
    selector: 'tarjeta-evento',
    template: 
    `
    <mat-card class="example-card">
  <mat-card-header>
    <div mat-card-avatar class="example-header-image"></div>
    <mat-card-title>{{evento.nombre}}</mat-card-title>
    <mat-card-subtitle>{{evento.fecha}} - {{evento.ciudad}}</mat-card-subtitle>
  </mat-card-header>
  <img mat-card-image [src]="evento.imagenUrl" alt="Photo of a Shiba Inu">
  <mat-card-content>
    <p>
      {{evento.descripcion}}
    </p>
  </mat-card-content>
  <mat-card-actions>
    <button mat-raised-button color="accent">ASISTIR</button>
    <button mat-button>COMPARTIR</button>
  </mat-card-actions>
</mat-card>
    `,
    styles: [`
    mat-card{
      margin: 15px;
    }
    .example-card {
        max-width: 400px;
      }
      
      .example-header-image {
        background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');
        background-size: cover;
      }
    `]
})
export class TarjetaEventoComponent {
    @Input() evento
}