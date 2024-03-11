import { Component, inject } from '@angular/core';
import { AnimeChanService } from '../../services/anime-chan.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-anime-chan',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './anime-chan.component.html',
  styleUrl: './anime-chan.component.css'
})

/**
 * Componente para mostrar las frases de anime traidas por el servicio
 *
 * @export
 * @class AnimeChanComponent
 */
export class AnimeChanComponent {

  anime: string = '';
  private _animeChanService = inject(AnimeChanService);
  datosAnimeChan:any;

  /**
   * LLama a la api usando el objeto observable del servicio
   *
   * @memberof AnimeChanComponent
   */
  buscarFrase() {
    this._animeChanService.buscarFraseAnime(this.anime).subscribe(
      (data) => {
        this.datosAnimeChan = this._animeChanService.procesarFraseAnime(data);
      }
    );
  }
 
  
}