import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { FilmesService } from "src/app/core/filmes.service";
import { Filme } from "src/app/shared/models/filme";

@Component({
  selector: "dio-visualizar-filme",
  templateUrl: "./visualizar-filme.component.html",
  styleUrls: ["./visualizar-filme.component.scss"]
})
export class VisualizarFilmeComponent implements OnInit {
  filmes: Filme;
  id = this.activateRoute.snapshot.params["id"];
  readonly semFoto: string;

  constructor(
    private activateRoute: ActivatedRoute,
    private filmesService: FilmesService
  ) {}

  ngOnInit() {
    this.visualizar(this.id);
  }

  private visualizar(id: number): void {
    this.filmesService.visualizar(id).subscribe((filme: Filme) => {
      this.filmes = filme;
    });
  }
}
