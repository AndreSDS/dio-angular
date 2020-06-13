import { MatDialog } from '@angular/material/dialog';
import { Filme } from './../../shared/models/filme';
import { FilmesService } from './../../core/filmes.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Alerta } from 'src/app/shared/models/alerta';
import { AlertaComponent } from 'src/app/shared/components/alerta/alerta.component';

@Component({
  selector: 'dio-visualizar',
  templateUrl: './visualizar.component.html',
  styleUrls: ['./visualizar.component.css']
})
export class VisualizarComponent implements OnInit {
  readonly semFoto = 'https://picsum.photos/180/270';
  filme: Filme;
  id: number;

  constructor(
    public dialog: MatDialog,
    private activatedRoute: ActivatedRoute,
    private filmeService: FilmesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.visualizar();
  }

  excluir(): void {
    const config = {
      data: {
        titulo: 'Realmente deseja exluir?',
        descricao: 'Clique em Ok para excluir definitivamente o item',
        corBtnCancel: 'warn',
        corBtn: 'primary',
        possuiBtnFechar: true
      } as Alerta
    };
    const dialogRef = this.dialog.open(AlertaComponent, config);
    dialogRef.afterClosed().subscribe((opcao: boolean) => {
      if (opcao) {
        this.filmeService.excluir(this.id).subscribe(() => {
          this.router.navigate(['/filmes']);
        });
      }
    });
  }

  private visualizar(): void {
    this.filmeService.visualizar(this.id).subscribe((item: Filme) => {
      this.filme = item;
    });
  }

}
