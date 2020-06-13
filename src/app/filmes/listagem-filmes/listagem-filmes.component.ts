import { Router } from '@angular/router';
import { Configparams } from './../../shared/models/configparams';
import { Filme } from './../../shared/models/filme';
import { FilmesService } from './../../core/filmes.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: "dio-listagem-filmes",
  templateUrl: "./listagem-filmes.component.html",
  styleUrls: ["./listagem-filmes.component.scss"]
})
export class ListagemFilmesComponent implements OnInit {

  readonly semFoto = 'https://picsum.photos/180/270';
  
  config: Configparams = {
    pagina: 0,
    limite: 4
  };

  filmes: Filme[] = [];
  filtrosListagem: FormGroup;
  generos: Array<string>;

  constructor(
    private filemService: FilmesService,
    private fb: FormBuilder,
    private router: Router
<<<<<<< HEAD
  ) { }
=======
  ) {}
>>>>>>> 06faf1eb9f5d9aa649c89fc5510451061f42a168

  ngOnInit() {
    this.filtrosListagem = this.fb.group({
      texto: [""],
      genero: [""]
    });

    this.filtrosListagem.get('texto').valueChanges
    .pipe(
      debounceTime(600)
    )
      .subscribe((val: string) => {
        this.config.pesquisa = val;
        this.resetarConsulta();
      });

    this.filtrosListagem.get('genero').valueChanges
      .subscribe((val: string) => {
        this.config.campo = {tipo: 'genero', valor: val};
        this.resetarConsulta();
      });

    this.generos = ['', 'Ação', 'Romance', 'Terror', 'Aventura', 'Ficção científica', 'Comédia', 'Drama'];

    this.listarFilmes();
  }

<<<<<<< HEAD
  abrir(id: number): void {
    this.router.navigateByUrl(`/filmes/${id}`);
  }

=======
>>>>>>> 06faf1eb9f5d9aa649c89fc5510451061f42a168
  onScroll(): void {
    this.listarFilmes();
  }

<<<<<<< HEAD
=======
  abrir(id: number): void {
    this.router.navigateByUrl(`/filmes/${id}`);
  }

>>>>>>> 06faf1eb9f5d9aa649c89fc5510451061f42a168
  private listarFilmes() {

    this.config.pagina++;
    this.filemService.listar(this.config).subscribe((filmes: Filme[]) => {
      this.filmes.push(...filmes);
    });
  }

  private resetarConsulta(): void {
    this.config.pagina = 0;
    this.filmes = [];
    this.listarFilmes();
  }
<<<<<<< HEAD

=======
>>>>>>> 06faf1eb9f5d9aa649c89fc5510451061f42a168
}
