import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { Filme } from './../shared/models/filme';

const url = 'http://localhost:3000/filmes/';

@Injectable({
  providedIn: 'root'
})
export class FilmesService {

  constructor( private http: HttpClient) { }

  salvar(filme: Filme): Observable<Filme> {
    return this.http.post<Filme>(url, filme).pipe(take(1));
  }

  listar(pagina: number, itensNaPagina: number, nomedoFilme: string, genero: string): Observable<Filme[]> {
    let httpParams = new HttpParams();
    httpParams = httpParams.set('_page', pagina.toString());
    httpParams = httpParams.set('_limit', itensNaPagina.toString());
    httpParams = httpParams.set('_sort', 'id');
    httpParams = httpParams.set('_order', 'desc');
    if (nomedoFilme) { httpParams = httpParams.set('q', nomedoFilme); }
    if (genero) { httpParams = httpParams.set('genero', genero); }
    return this.http.get<Filme[]>(url, { params: httpParams }).pipe(take(1));
  }
}
