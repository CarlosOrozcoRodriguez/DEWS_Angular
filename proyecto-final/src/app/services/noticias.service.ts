import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
/**
 * Servicio para obtener las noticias a partir de la API
 *
 * @export
 * @class NoticiasService
 */
export class NoticiasService {

  private _http = inject(HttpClient);
  private urlBase = 'https://api.currentsapi.services/v1/latest-news';
  private apiKey = 'xAMGzUAIpvbAnCxdxUn6rz7qJlM-dT7GtY8h5Infh27rgIXl';

  /**
   * Genera la llamada a la api
   * 
   * @returns la llamada a la api como observable
   */
  buscarNoticia(): Observable<any> {
    return this._http.get(`${this.urlBase}?language=es&apiKey=${this.apiKey}`);
  }

  /** 
   * Procesa los datos de la noticia y los convierte a objeto
   * @param data 
   * @returns 
   */
  procesarNoticia(data: any): any {
    return {
      titular: data.title,
      aperitivo: data.description,
      url: data.url
    };
  }
}
