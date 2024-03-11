import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Libro } from '../models/libro.model';

//https://dews-angular.onrender.com/ //puerto 10000?
const baseUrl = 'http://localhost:8080/api/libros';
//const baseUrl = 'https://dews-angular.onrender.com:10000/api/libros';
@Injectable({
  providedIn: 'root'
})


/**
 * Servicio para obtener los libros a partir de la API de nuestro servidor
 *
 * @export
 * @class LibroService
 */
export class LibroService {
  constructor(private http: HttpClient) {} //hace falta el constructor?

  /**
   * Genera la llamada a la api
   * para obtener todos los libros
   * 
   * @return {*}  {Observable<Libro[]>}
   * @memberof LibroService
   */
  getAll(): Observable<Libro[]> {
    return this.http.get<Libro[]>(baseUrl);
  }

  
  /**
   * Genera la llamada a la api
   * para obtener un libro
   * 
   * @param {*} id
   * @return {*}  {Observable<Libro>}
   * @memberof LibroService
   */
  get(id: any): Observable<Libro> {
    return this.http.get<Libro>(`${baseUrl}/${id}`);
  }

  /**
   * Genera la llamada a la api
   * para crear un libro
   * 
   * @param data 
   * @returns 
   */
  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  /**
   * Genera la llamada a la api
   * para actualizar un libro
   *
   * @param {*} id
   * @param {*} data
   * @return {*}  {Observable<any>}
   * @memberof LibroService
   */
  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  /**
   * Genera la llamada a la api
   * para borrar un libro
   *
   * @param {*} id
   * @return {*}  {Observable<any>}
   * @memberof LibroService
   */
  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  /**
   * Genera la llamada a la api
   * para borrar todos los libros
   *
   * @return {*}  {Observable<any>}
   * @memberof LibroService
   */
  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  /**
   * Genera la llamada a la api
   * para buscar un libro por su titulo
   *
   * @param {*} titulo
   * @return {*}  {Observable<Libro[]>}
   * @memberof LibroService
   */
  findByTitulo(titulo: any): Observable<Libro[]> {
    return this.http.get<Libro[]>(`${baseUrl}?titulo=${titulo}`);
  }
}
