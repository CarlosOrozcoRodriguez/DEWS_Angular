import { Component, inject } from '@angular/core';
import { NekoBestService } from '../../services/neko-best.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-neko-best',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './neko-best.component.html',
  styleUrl: './neko-best.component.css'
})
export class NekoBestComponent {

  categoria: string = '';
  categorias:string[] = ['husbando', 'kitsune', 'neko', 'waifu'];
  private _nekiBestService = inject(NekoBestService);
  datosNeko:any;

  buscarNeko() {
    this._nekiBestService.buscarNeko(this.categoria).subscribe(
      (data) => {
        this.datosNeko = this._nekiBestService.procesarDatosNeko(data.results[0]);
      });
  }
 
  
}
