import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-interruptor',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './interruptor.component.html',
  styleUrl: './interruptor.component.css'
})


/**
 * Componente para encender y apagar un interruptor
 *
 * @export
 * @class InterruptorComponent
 */
export class InterruptorComponent {
  state : boolean;
  constructor() {
     this.state = false; 
  }

  /**
   * Inicializa el componente
   *
   * @memberof InterruptorComponent
   */
  ngOnInit(): void {
  }

  /**
   * Cambia el estado del interruptor
   *
   * @memberof InterruptorComponent
   */
  toggle() {
    this.state = !this.state;
  }
}
