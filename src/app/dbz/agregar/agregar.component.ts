import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent {

  @Input() nuevoRegistro: Personaje = {nombre: '',
  poder: 0}

  @Output() onNuevoPersonaje: EventEmitter<Personaje>= new EventEmitter();

  cambiarNombre(event: any):void{
    console.log(event.target.value)
  }

  cambiarPoder(event: any): void{
  }

  agregar(){
    if(this.nuevoRegistro.nombre.trim().length == 0 || this.nuevoRegistro.poder < 0){return;}
    this.onNuevoPersonaje.emit(this.nuevoRegistro)
    this.nuevoRegistro = {
      nombre: '',
      poder: 0
    } 
  }


}
