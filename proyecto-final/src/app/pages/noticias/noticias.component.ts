import { Component, inject } from '@angular/core';
import { NoticiasService } from '../../services/noticias.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-noticias',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './noticias.component.html',
  styleUrl: './noticias.component.css'
})

/**
 * Componente para mostrar las noticias traidas por el servicio
 *
 * @export
 * @class NoticiasComponent
 */
export class NoticiasComponent {
  private _noticiaService = inject(NoticiasService);
  datosNoticia:any; //este es un array

  /**
   * LLama a la api usando el objeto observable del servicio
   * pasa a datosNoticia el resultado de procesar las noticias 
   *
   * @memberof NoticiasComponent
   */
  buscarNoticia() {
    let array = new Array();
    this._noticiaService.buscarNoticia().subscribe(
      (data) => {
        data['news'].forEach((noticia: any) => {
          array.push(this._noticiaService.procesarNoticia(noticia));
        });
      });
    this.datosNoticia = array;
  }
 
  
}
