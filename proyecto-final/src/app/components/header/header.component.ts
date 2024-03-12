import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { Router, RouterLink} from '@angular/router';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  public busqueda: string ="";
  // Inyectamos el servicio Router en el constructor
  constructor(private router: Router) { }
  // Método para buscar y navegar a la página correspondiente

  ngOnInit(): void {
  }

  buscar(busqueda:string) {
    switch (this.busqueda.toLowerCase()) {
      case 'adivinanza':
        this.router.navigate(['/adivinanza']);
        break;
      case 'interruptor':
        this.router.navigate(['/interruptor']);
        break;
      case 'anime':
      case 'anime-chan':
        this.router.navigate(['/anime-chan']);
        break;
      case 'clima':
        this.router.navigate(['/clima']);
        break;
      case 'libros':
        this.router.navigate(['/libros']);
        break;
      case 'neko':
      case 'neko-best':
        this.router.navigate(['/neko-best']);
        break;
      case 'noticias':
        this.router.navigate(['/noticias']);
        break;
      case 'home':
        this.router.navigate(['/home']);
        break;
      default:
        this.router.navigate(['/home']);
        break;
    }
    this.busqueda = '';
  }
}