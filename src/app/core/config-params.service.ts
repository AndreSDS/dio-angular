import { HttpParams } from '@angular/common/http';
import { Configparams } from './../shared/models/configparams';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigParamsService {

  constructor() { }

  configureParams(config: Configparams): HttpParams{
    let httpParams = new HttpParams();

    if (config.pagina) { httpParams = httpParams.set('_page', config.pagina.toString()); }
    if (config.limite) { httpParams = httpParams.set('_limit', config.limite.toString()); }
    if (config.pesquisa) { httpParams = httpParams.set('q', config.pesquisa); }
    if (config.campo && config.campo.valor) { httpParams = httpParams.set(config.campo.tipo, config.campo.valor.toString()); }
    httpParams = httpParams.set('_sort', 'id');
    httpParams = httpParams.set('_order', 'desc');

    return httpParams;
  }
}
