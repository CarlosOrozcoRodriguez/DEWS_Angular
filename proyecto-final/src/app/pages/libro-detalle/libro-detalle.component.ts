import { Component, Input, OnInit } from '@angular/core';
import { LibroService } from '../../services/libro.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Libro } from '../../models/libro.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-libro-detalle',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './libro-detalle.component.html',
  styleUrl: './libro-detalle.component.css'
})
export class LibroDetalleComponent {
  @Input() viewMode = false;

  @Input() currentLibro: Libro = {
    titulo: '',
    argumento: '',
    enCatalogo: false
  };

  message = '';

  constructor(
    private libroService: LibroService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  /**
   * Inicializa los datos del libro
   *
   * @memberof LibroDetalleComponent
   */
  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getLibro(this.route.snapshot.params['id']);
    }
  }

  /**
   * Obtiene los datos del libro por su id desde la API
   *
   * @param {string} id
   * @memberof LibroDetalleComponent
   */
  getLibro(id: string): void {
    this.libroService.get(id).subscribe({
      next: (data) => {
        this.currentLibro = data;
        console.log(data);
      },
      error: (e) => console.error(e) // puede saltar si no se recibe nada?
    });
  }

  /**
   * Actualiza el estado de catalogado del libro
   *
   * @param {boolean} status
   * @memberof LibroDetalleComponent
   */
  updateCataloged(status: boolean): void {
    const data = { //preparamos el objeto
      titulo: this.currentLibro.titulo,
      argumento: this.currentLibro.argumento,
      enCatalogo: status
    };

    this.message = '';

    //lo mandamos por la API
    this.libroService.update(this.currentLibro.id, data).subscribe({
      next: (res) => {
        console.log(res);
        this.currentLibro.enCatalogo = status;
        this.message = res.message
          ? res.message
          : 'Estado acualizado correctamente!';
      },
      error: (e) => console.error(e)
    });
  }

  /**
   * Actualiza el libro
   *
   * @memberof LibroDetalleComponent
   */
  updateLibro(): void {
    this.message = '';

    this.libroService
      .update(this.currentLibro.id, this.currentLibro)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message
            ? res.message
            : 'Libro actualizado!';
        },
        error: (e) => console.error(e)
      });
  }

  /**
   * Borra el libro
   *
   * @memberof LibroDetalleComponent
   */
  deleteLibro(): void {
    this.libroService.delete(this.currentLibro.id).subscribe({
      next: (res) => {
        console.log(res);
        this.router.navigate(['/libros']);
      },
      error: (e) => console.error(e)
    });
  }
}

