import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  template: `
  <mat-toolbar color="primary">
      Mi Aplicacion
  </mat-toolbar>
  <router-outlet></router-outlet>
  `

})
export class AppComponent {
  title = 'app';
}
