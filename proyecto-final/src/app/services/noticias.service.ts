import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  private _http = inject(HttpClient);
  private urlBase = 'https://api.currentsapi.services/v1/latest-news';
  private apiKey = 'xAMGzUAIpvbAnCxdxUn6rz7qJlM-dT7GtY8h5Infh27rgIXl';

  buscarNoticia(): Observable<any> {
    return this._http.get(`${this.urlBase}?language=es&apiKey=${this.apiKey}`);
  }

  procesarNoticia(data: any): any {
    return {
      titular: data.title,
      aperitivo: data.description,
      url: data.url
    };
  }
}
