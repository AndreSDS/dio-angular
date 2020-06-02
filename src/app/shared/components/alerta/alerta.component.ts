import { Alerta } from './../../models/alerta';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-alerta-modal',
  templateUrl: './alerta.component.html',
  styleUrls: ['./alerta.component.css']
})
export class AlertaComponent implements OnInit {

  alerta = {
    titulo: 'Sucesso',
    descricao: 'Cadastro efetuado com sucesso.',
    btnSucesso: 'Ok',
    btnClose: 'Cancelar',
    corBtn: 'accent',
    corBtnCancel: 'warn',
    possuiBtnFechar: false
} as Alerta;

  constructor(
    public dialogRef: MatDialogRef<AlertaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Alerta ) { }

  ngOnInit(): void {
    if (this.data) {
      this.alerta.titulo = this.data.titulo || this.alerta.titulo;
      this.alerta.descricao = this.data.descricao || this.alerta.descricao;
      this.alerta.btnSucesso = this.data.btnSucesso || this.alerta.btnSucesso;
      this.alerta.btnClose = this.data.btnClose || this.alerta.btnClose;
      this.alerta.corBtn = this.data.corBtn || this.alerta.corBtn;
      this.alerta.corBtnCancel = this.data.corBtn || this.alerta.corBtnCancel;
      this.alerta.possuiBtnFechar = this.data.possuiBtnFechar || this.alerta.possuiBtnFechar;
    }
  }

}
