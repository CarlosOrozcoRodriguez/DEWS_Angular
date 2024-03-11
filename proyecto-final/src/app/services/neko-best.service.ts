import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NekoBestService {
  private _http = inject(HttpClient);
  private urlBase = 'https://nekos.best/api/v2';

  buscarNeko(categoria: string): Observable<any> {
    return this._http.get(`${this.urlBase}/${categoria}`);
  }

  procesarDatosNeko(data: any): any {
    return {
      uRLDelArtista: data.artist_href,
      nombreArtista: data.artist_name,
      origenImagen: data.source_url,
      imagen: data.url
    };
  }
}