import { Filme } from './../../shared/models/filme';
import { FilmesService } from './../../core/filmes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dio-listagem-filmes',
  templateUrl: './listagem-filmes.component.html',
  styleUrls: ['./listagem-filmes.component.scss']
})
export class ListagemFilmesComponent implements OnInit {

  filmes: Filme[] = [];
  pagina = 0;
  readonly itensPorPagina = 4;

  constructor(
    private filemService: FilmesService
  ) { }

  ngOnInit() {
    this.listarFilmes();
  }

  private listarFilmes() {
    this.pagina++;
    this.filemService.listar(this.pagina, this.itensPorPagina).subscribe((filmes: Filme[]) => {
      this.filmes.push(...filmes);
    });
  }

  onScroll(): void {
    this.listarFilmes();
  }
}
