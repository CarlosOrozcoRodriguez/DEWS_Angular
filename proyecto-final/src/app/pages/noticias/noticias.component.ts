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
export class NoticiasComponent {
  private _noticiaService = inject(NoticiasService);
  datosNoticia:any; //este es un array

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
