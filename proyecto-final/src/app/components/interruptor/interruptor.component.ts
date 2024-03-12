import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-interruptor',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './interruptor.component.html',
  styleUrl: './interruptor.component.css'
})
export class InterruptorComponent {
  state : boolean;
  constructor() {
     this.state = false; 
  }

  ngOnInit(): void {
  }

  toggle() {
    this.state = !this.state;
  }
}
