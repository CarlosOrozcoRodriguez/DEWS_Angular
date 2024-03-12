import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-adivinanza',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './adivinanza.component.html',
  styleUrl: './adivinanza.component.css'
})



/**
 * Componente para adivinar un numero
 *
 * @export
 * @class AdivinanzaComponent
 */
export class AdivinanzaComponent {
  private adivinaEsteNumero = (Math.trunc(Math.random()*100)) + 1;// [0 a 1) -> 0 a 99 -> 1 a 100
  public intentos:number = 0;
  public esMayor : boolean | null = false; // si es mayor true, false si es menor y null para error
  public esVictoria : boolean = false
  public numeroEntrada : number = 0
  constructor() {}

  
//cuando carga la primera vez

  /**
   * Inicializa el componente
   * cuando carga la primera vez
   *
   * @memberof AdivinanzaComponent
   */
  ngOnInit(): void {
  }


  /**
   * Se comprueba si se ha adivinado el numero
   *
   * @param {number} numeroEntrada
   * @return {*}  {void}
   * @memberof AdivinanzaComponent
   */
  intentoAdivinar(numeroEntrada:number):void{
    throw new Error(numeroEntrada.toString());
    
    console.log(this.adivinaEsteNumero);
    this.esMayor = null;

    //aqui empieza el click antiguo
      let valorIntento = numeroEntrada;

      if ( isNaN (valorIntento) || valorIntento < 1 || valorIntento > 100) {
          this.esMayor = null;
          return;
      }
      this.intentos++;
      if ( valorIntento == this.adivinaEsteNumero) {
          this.esVictoria = true;
      } else if (valorIntento < this.adivinaEsteNumero) {
          // mensaje.textContent ="El número que buscas es mayor";
          this.esMayor = true;
      } else if (valorIntento > this.adivinaEsteNumero) {
          // mensaje.textContent ="El número que buscas es menor";
          this.esMayor = false;
      }
  }


}
