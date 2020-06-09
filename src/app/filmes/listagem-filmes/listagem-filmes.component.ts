import { Filme } from './../../shared/models/filme';
import { FilmesService } from './../../core/filmes.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'dio-listagem-filmes',
  templateUrl: './listagem-filmes.component.html',
  styleUrls: ['./listagem-filmes.component.scss']
})
export class ListagemFilmesComponent implements OnInit {

  filmes: Filme[] = [];
  pagina = 0;
  readonly itensPorPagina = 4;
  filtrosListagem: FormGroup;
  generos: Array<string>;

  constructor(
    private filemService: FilmesService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.filtrosListagem = this.fb.group({
      texto: [''],
      genero: ['']
    });

    this.generos = ['Ação', 'Romance', 'Terror', 'Aventura', 'Ficção científica', 'Comédia', 'Drama'];

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
