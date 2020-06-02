import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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

  constructor(
    public dialog: MatDialog,
    public validacao: ValidacaoService,
    private fb: FormBuilder,
    private filmeService: FilmesService,
    private router: Router) { }

  get f() {
    return this.cadastro.controls;
  }

  ngOnInit() {

    this.cadastro = this.fb.group({
      titulo: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
      urlFoto: ['', [Validators.minLength(10)]],
      dtLancamento: ['', [Validators.required]],
      descricao: [''],
      nota: [0, [Validators.required, Validators.min(0), Validators.max(10)]],
      urlIMDb: ['', [Validators.minLength(10)]],
      genero: ['', [Validators.required]]
    });

    this.generos = ['Ação', 'Romance', 'Terror', 'Aventura', 'Ficção científica', 'Comédia', 'Drama'];
  }

  submit(): void {
    this.cadastro.markAllAsTouched();
   if (this.cadastro.invalid) {
     return;
   }
   const filme = this.cadastro.getRawValue() as Filme;
   this.salvar(filme);
  }

  resetar(): void {
    this.cadastro.reset();
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
}
