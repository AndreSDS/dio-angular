import { Filme } from "./../../shared/models/filme";
import { FilmesService } from "./../../core/filmes.service";
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { take } from "rxjs/operators";
import { Router } from "@angular/router";

@Component({
  selector: "dio-listagem-filmes",
  templateUrl: "./listagem-filmes.component.html",
  styleUrls: ["./listagem-filmes.component.scss"]
})
export class ListagemFilmesComponent implements OnInit {
  filmes: Filme[] = [];
  pagina = 0;
  nomedoFilme: string;
  genero: string;
  readonly itensPorPagina = 4;
  filtrosListagem: FormGroup;
  generos: Array<string>;

  constructor(
    private filemService: FilmesService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {
    this.filtrosListagem = this.fb.group({
      texto: [""],
      genero: [""]
    });

    this.filtrosListagem
      .get("texto")
      .valueChanges.pipe(take(1))
      .subscribe((val: string) => {
        this.nomedoFilme = val;
        this.resetarConsulta();
      });

    this.filtrosListagem
      .get("genero")
      .valueChanges.pipe(take(1))
      .subscribe((val: string) => {
        this.genero = val;
        this.resetarConsulta();
      });

    this.generos = [
      "Ação",
      "Romance",
      "Terror",
      "Aventura",
      "Ficção científica",
      "Comédia",
      "Drama"
    ];

    this.listarFilmes();
  }

  onScroll(): void {
    this.listarFilmes();
  }

  abrir(id: number): void {
    this.router.navigateByUrl(`/filmes/${id}`);
  }

  private listarFilmes() {
    this.pagina++;
    this.filemService
      .listar(this.pagina, this.itensPorPagina, this.nomedoFilme, this.genero)
      .subscribe((filmes: Filme[]) => {
        this.filmes.push(...filmes);
      });
  }

  private resetarConsulta(): void {
    this.pagina = 0;
    this.filmes = [];
    this.listarFilmes();
  }
}
