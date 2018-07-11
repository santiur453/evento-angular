import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  template: `
  <mat-toolbar color="primary">
      Mi Aplicacion
  </mat-toolbar>
  <lista-eventos></lista-eventos>
  `

})
export class AppComponent {
  title = 'app';
}
