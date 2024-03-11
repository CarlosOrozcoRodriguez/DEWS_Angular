import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnimeChanService {
  private _http = inject(HttpClient);
  private urlBase = 'https://animechan.xyz/api/random';
  //private apiKey = '605507acf87117e111e54a3ab5238541';
  
  buscarFraseAnime(anime:string): Observable<any> {
    return this._http.get(`${this.urlBase}/anime?title=${anime}`);
  }

  procesarFraseAnime(data: any): any {
    return {
      anime: data.anime,
      personaje: data.character,
      frase: data.quote
    };
  }
}
