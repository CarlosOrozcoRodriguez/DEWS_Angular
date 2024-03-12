import { Component } from '@angular/core';
import { Libro } from '../../models/libro.model';
import { LibroService } from '../../services/libro.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-libro-add',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './libro-add.component.html',
  styleUrl: './libro-add.component.css'
})


/**
 * Componente para agregar libros
 *
 * @export
 * @class AddLibroComponent
 */
export class AddLibroComponent {
  libro: Libro = {
    titulo: '',
    argumento: '',
    enCatalogo: false
  };
  submitted = false;

  //se le pasa el servicio
  constructor(private libroService: LibroService) {}

  /**
   * Crea un nuevo libro a traves de la API
   *
   * @memberof AddLibroComponent
   */
  saveLibro(): void {
    const data = {
      titulo: this.libro.titulo,
      argumento: this.libro.argumento
    };

    this.libroService.create(data).subscribe({
      next: (res) => {
        console.log(res);
        this.submitted = true;
      },
      error: (e) => console.error(e)
    });
  }

  /**
   * Limpia el formulario para agregar otro libro
   *
   * @memberof AddLibroComponent
   */
  newLibro(): void {
    this.submitted = false;
    this.libro = {
      titulo: '',
      argumento: '',
      enCatalogo: false
    };
  }
}

