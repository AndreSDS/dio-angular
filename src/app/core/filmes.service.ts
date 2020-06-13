import { ConfigParamsService } from './config-params.service';
import { Configparams } from './../shared/models/configparams';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { Filme } from './../shared/models/filme';

const url = 'http://localhost:3000/filmes/';

@Injectable({
  providedIn: 'root'
})
export class FilmesService {

  constructor( 
    private http: HttpClient,
    private configParamsService: ConfigParamsService
) { }

  salvar(filme: Filme): Observable<Filme> {
    return this.http.post<Filme>(url, filme).pipe(take(1));
  }

  listar(config: Configparams): Observable<Filme[]> {
    const configParams = this.configParamsService.configureParams(config);
    return this.http.get<Filme[]>(url, { params: configParams });
  }

  visualizar(id: number): Observable<Filme> {
    return this.http.get<Filme>(url + id);
  }
}
