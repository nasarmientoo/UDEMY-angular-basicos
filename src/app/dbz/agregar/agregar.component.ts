import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent {

  @Input() nuevoRegistro: Personaje = {nombre: '',
  poder: 0}

  // Ya no lo usamos porque estamos trayendo el método agregar del servicio @Output() onNuevoPersonaje: EventEmitter<Personaje>= new EventEmitter();

  constructor(private DbzService:DbzService){}

  agregar(){
    if(this.nuevoRegistro.nombre.trim().length == 0 || this.nuevoRegistro.poder < 0){return;}
    //this.onNuevoPersonaje.emit(this.nuevoRegistro)
    this.DbzService.agregarPersonaje(this.nuevoRegistro)
    this.nuevoRegistro = {
      nombre: '',
      poder: 0
    } 
  }


}
