import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

/**
 * Servicio para obtener los nekos a partir de la API
 *
 * @export
 * @class NekoBestService
 */
export class NekoBestService {
  private _http = inject(HttpClient);
  private urlBase = 'https://nekos.best/api/v2';

  /**
   * Genera la llamada a la api
   *
   * @param {string} categoria esta definida en el servicio
   * @return {*}  {Observable<any>}
   * @memberof NekoBestService
   */
  buscarNeko(categoria: string): Observable<any> {
    return this._http.get(`${this.urlBase}/${categoria}`);
  }

  /**
   * Procesa los datos del Neko y lo convierte a objeto
   *
   * @param {*} data
   * @return {*}  {*}
   * @memberof NekoBestService
   */
  procesarDatosNeko(data: any): any {
    return {
      uRLDelArtista: data.artist_href,
      nombreArtista: data.artist_name,
      origenImagen: data.source_url,
      imagen: data.url
    };
  }
}