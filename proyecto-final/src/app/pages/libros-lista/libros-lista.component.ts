import { Component, OnInit } from '@angular/core';
import { Libro } from '../../models/libro.model';
import { LibroService } from '../../services/libro.service';
import { LibroDetalleComponent } from '../libro-detalle/libro-detalle.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-libros-lista',
  standalone: true,
  imports: [FormsModule, LibroDetalleComponent],
  templateUrl: './libros-lista.component.html',
  styleUrl: './libros-lista.component.css'
})

/**
 * Componente para mostrar la lista de libros
 *
 * @export
 * @class LibrosListaComponent
 */
export class LibrosListaComponent {
  libros?: Libro[];
  currentLibro: Libro = {};
  currentIndex = -1;
  titulo = '';

  constructor(private libroService: LibroService) {} //hace falta el constructor?

  /**
   * Inicializa los libros de la lista
   *
   * @memberof LibrosListaComponent
   */
  ngOnInit(): void {
    this.retrieveLibros();
  }

  /**
   * Obtiene los libros de la lista desde la API
   *
   * @memberof LibrosListaComponent
   */
  retrieveLibros(): void {
    this.libroService.getAll().subscribe({
      next: (data) => {
        this.libros = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }

  /**
   * Actualiza la lista
   *
   * @memberof LibrosListaComponent
   */
  refreshList(): void {
    this.retrieveLibros();
    this.currentLibro = {};
    this.currentIndex = -1;
  }

  /**
   * Establece el libro actual
   *
   * @param {Libro} libro
   * @param {number} index
   * @memberof LibrosListaComponent
   */
  setActiveLibro(libro: Libro, index: number): void {
    this.currentLibro = libro;
    this.currentIndex = index;
  }

  /**
   * Elimina todos los libros de la lista desde la API
   *
   * @memberof LibrosListaComponent
   */
  removeAllLibros(): void {
    this.libroService.deleteAll().subscribe({
      next: (res) => {
        console.log(res);
        this.refreshList();
      },
      error: (e) => console.error(e)
    });
  }

  /**
   * Busca un libro por su titulo en la API
   * Podrian encontrarse varios
   * 
   * @memberof LibrosListaComponent
   */
  searchTitulo(): void {
    this.currentLibro = {};
    this.currentIndex = -1;

    this.libroService.findByTitulo(this.titulo).subscribe({
      next: (data) => {
        this.libros = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }
}
