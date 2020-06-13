import { Filme } from './../../shared/models/filme';
import { FilmesService } from './../../core/filmes.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'dio-visualizar',
  templateUrl: './visualizar.component.html',
  styleUrls: ['./visualizar.component.css']
})
export class VisualizarComponent implements OnInit {
  readonly semFoto = 'https://picsum.photos/180/270';
  filme: Filme;

  constructor(
    private activatedRoute: ActivatedRoute,
    private filmeService: FilmesService
  ) { }

  ngOnInit(): void {
    this.visualizar(this.activatedRoute.snapshot.params['id']);
  }

  private visualizar(id: number): void {
    this.filmeService.visualizar(id).subscribe((item: Filme) => {
      this.filme = item;
    });
  }

}
