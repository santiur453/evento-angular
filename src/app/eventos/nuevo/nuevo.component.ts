import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {EventosService} from '../servicios/eventos.service';
import * as moment from 'moment';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoEventoComponent implements OnInit {
  public nombre;
  public date;
  public descr;
  public img;
  public city;
  public file;

  constructor(
    private router: Router,
    private service: EventosService

  ) { }

  ngOnInit() {
  }

  cancelar(){
    console.log('cancelar');
    this.router.navigate(['/eventos']);
  }
  recibe(evento){
    let fileList:FileList=evento.target.files;
    if (fileList.length > 0) {
      let self = this;
      self.file=fileList[0];
      let fileReader = new FileReader();
      fileReader.readAsDataURL(self.file)
      fileReader.onload=(e)=>{
        self.img=fileReader.result
      }
    }
  }
  obtener(){
    let obj = {
      id: this.service.obtenerID(),
      nombre: this.nombre,
      fecha: moment(this.date).format("DD/MM/YYYY"),
      descripcion: this.descr,
      imagenUrl: this.img,
      ciudad: this.city
    }
    console.log("nombre",obj);
    this.service.inputEventos(obj);
    this.router.navigate(['/eventos']);

  }


}
