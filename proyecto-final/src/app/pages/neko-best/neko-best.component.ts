import { Component, inject } from '@angular/core';
import { NekoBestService } from '../../services/neko-best.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-neko-best',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './neko-best.component.html',
  styleUrl: './neko-best.component.css'
})



/**
 * Componente para mostrar los nekos traidos por el servicio
 *
 * @export
 * @class NekoBestComponent
 */
export class NekoBestComponent {

  categoria: string = '';
  categorias:string[] = ['husbando', 'kitsune', 'neko', 'waifu'];
  private _nekoBestService = inject(NekoBestService);
  datosNeko:any;

  /**
   * LLama a la api usando el objeto observable del servicio
   * Esta limitado a un solo Neko
   * @memberof NekoBestComponent
   */
  buscarNeko() {
    this._nekoBestService.buscarNeko(this.categoria).subscribe(
      (data) => {
        this.datosNeko = this._nekoBestService.procesarDatosNeko(data.results[0]);
      });
  }
 
  
}
