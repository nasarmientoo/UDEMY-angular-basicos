import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {
  heroes: string[] = ['IronMan', 'Spiderman', 'Viuda Negra', 'Hulk'];
  heroesBorrados: string[] = [];

  /*borrarHeroe(array: string[],index: number):void{
    array.splice(index, 1) || array
  }*/

  borrarHeroe(array: string[]):void{
    this.heroesBorrados.push(array.shift()||'')
  }

  /*heroeBorrado: string = "";
  borrarHeroe(array: string[]):void{
    this.heroeBorrado = array.shift()||'';
  }*/
}
