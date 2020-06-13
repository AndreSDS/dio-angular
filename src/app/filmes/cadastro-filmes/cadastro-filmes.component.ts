import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FilmesService } from './../../core/filmes.service';
import { MatDialog } from '@angular/material/dialog';
import { Filme } from './../../shared/models/filme';
import { Alerta } from './../../shared/models/alerta';
import { ValidacaoService } from './../../shared/components/campos/validacao.service';
import { AlertaComponent } from './../../shared/components/alerta/alerta.component';

@Component({
  selector: 'dio-cadastro-filmes',
  templateUrl: './cadastro-filmes.component.html',
  styleUrls: ['./cadastro-filmes.component.scss']
})
export class CadastroFilmesComponent implements OnInit {

  cadastro: FormGroup;
  generos: Array<string>;
  id: number;

  constructor(
    public dialog: MatDialog,
    public validacao: ValidacaoService,
    private fb: FormBuilder,
    private filmeService: FilmesService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  get f() {
    return this.cadastro.controls;
  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];
    if (this.id) {
      this.filmeService.visualizar(this.id).subscribe((filme: Filme) => this.criarForm(filme));
    } else {
      this.criarForm(this.criarFilmeEmBranco());
    }

    this.generos = ['', 'Ação', 'Romance', 'Terror', 'Aventura', 'Ficção científica', 'Comédia', 'Drama'];
  }

  submit(): void {
    this.cadastro.markAllAsTouched();
   if (this.cadastro.invalid) {
     return;
   }
   const filme = this.cadastro.getRawValue() as Filme;
   if (this.id) {
     filme.id = this.id;
    this.editar(filme);
   } else {
    this.salvar(filme);
   }
  }

  resetar(): void {
    this.cadastro.reset();
  }

  private criarFilmeEmBranco(): Filme {
    return {
      id: null,
      titulo: null,
      urlFoto: null,
      dtLancamento: null,
      descricao: null,
      nota: null,
      urlIMDb: null,
      genero: null
    } as Filme;
  }

  private criarForm(filme: Filme): void {
    this.cadastro = this.fb.group({
      titulo: [filme.titulo, [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
      urlFoto: [filme.urlFoto, [Validators.minLength(10)]],
      dtLancamento: [filme.dtLancamento, [Validators.required]],
      descricao: [filme.descricao],
      nota: [filme.nota, [Validators.required, Validators.min(0), Validators.max(10)]],
      urlIMDb: [filme.urlIMDb, [Validators.minLength(10)]],
      genero: [filme.genero, [Validators.required]]
    });
  }

  private salvar(filme: Filme): void {
    this.filmeService.salvar(filme).subscribe(() => {
      const config = {
        data: {
          btnSucesso: 'Ir para lista de filmes',
          btnClose: 'Cadastrar novo filme',
          corBtnCancel: 'primary',
          possuiBtnFechar: true
        } as Alerta
      };
      const dialogRef = this.dialog.open(AlertaComponent, config);
      dialogRef.afterClosed().subscribe((opcao: boolean) => {
        if (opcao) {
          this.router.navigateByUrl('filmes');
        } else {
          this.resetar();
        }
      });
    },
    () => {
      const config = {
        data: {
          titulo: 'Erro ao salvar.',
          descrição: 'Não conseguimos salvar. Favor tentar novamente mais tarde.',
          btnSucesso: 'Fechar',
          corBtn: 'warn'
        } as Alerta
      };
      this.dialog.open(AlertaComponent, config);
    });
  }

  private editar(filme: Filme): void {
    this.filmeService.editar(filme).subscribe(() => {
      const config = {
        data: {
          descricao: 'Seu registro foi atualizado com sucesso!',
          btnSucesso: 'Ir para lista de filmes'
        } as Alerta
      };
      const dialogRef = this.dialog.open(AlertaComponent, config);
      dialogRef.afterClosed().subscribe(() => this.router.navigateByUrl('filmes'));
    },
    () => {
      const config = {
        data: {
          titulo: 'Erro ao editar oregistro.',
          descrição: 'Não conseguimos editar. Favor tentar novamente mais tarde.',
          btnSucesso: 'Fechar',
          corBtn: 'warn'
        } as Alerta
      };
      this.dialog.open(AlertaComponent, config);
    });
  }
}
