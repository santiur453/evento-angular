import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoEventoComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  cancelar(){
    console.log('cancelar');
    this.router.navigate(['/eventos']);
  }
}
