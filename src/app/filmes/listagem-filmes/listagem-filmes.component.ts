import { Filme } from './../../shared/models/filme';
import { FilmesService } from './../../core/filmes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dio-listagem-filmes',
  templateUrl: './listagem-filmes.component.html',
  styleUrls: ['./listagem-filmes.component.scss']
})
export class ListagemFilmesComponent implements OnInit {

  filmes: Filme[];

  constructor(
    private filemService: FilmesService
  ) { }

  ngOnInit() {
    this.listarFilmes();
  }

  listarFilmes() {
    this.filemService.listar().subscribe((filmes: Filme[]) => {
      this.filmes = filmes;
    });
  }
}
