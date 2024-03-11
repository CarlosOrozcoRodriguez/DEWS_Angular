import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

/**
 * Servicio para obtener las frases de anime a partir de la API de AnimeChan
 *
 * @export
 * @class AnimeChanService
 */
export class AnimeChanService {
  private _http = inject(HttpClient);
  private urlBase = 'https://animechan.xyz/api/random';
  //private apiKey = '605507acf87117e111e54a3ab5238541';
  
  /**
   * Genera la llamada a la api
   *
   * @param {string} anime es el anime del que se busca la frase
   * @return {*}  {Observable<any>}
   * @memberof AnimeChanService
   */
  buscarFraseAnime(anime:string): Observable<any> {
    return this._http.get(`${this.urlBase}/anime?title=${anime}`);
  }

  /**
   * Procesa los datos de la frase y los convierte a objeto
   *
   * @param {*} data
   * @return {*}  {*}
   * @memberof AnimeChanService
   */
  procesarFraseAnime(data: any): any {
    return {
      anime: data.anime,
      personaje: data.character,
      frase: data.quote
    };
  }
}
