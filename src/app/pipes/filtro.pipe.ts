import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(
      arreglo: any[],
      textoBuscar: string = '',
      columna: string = 'title'
    ): any[] {

    if (textoBuscar === ''){
      return arreglo;
    }

    if ( !arreglo ){
      return arreglo;
    }

    textoBuscar = textoBuscar.toLowerCase();

    return arreglo.filter(
      item => item[columna].toLowerCase().includes( textoBuscar )
    );
  }

}
