<<<<<<< HEAD
import { CamposModule } from './../shared/components/campos/campos.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { MaterialModule } from '../shared/material/material.module';
import { CadastroFilmesComponent } from './cadastro-filmes/cadastro-filmes.component';
import { ListagemFilmesComponent } from './listagem-filmes/listagem-filmes.component';
import { VisualizarComponent } from './visualizar/visualizar.component';
=======
import { CamposModule } from "./../shared/components/campos/campos.module";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { InfiniteScrollModule } from "ngx-infinite-scroll";
import { MaterialModule } from "../shared/material/material.module";
import { CadastroFilmesComponent } from "./cadastro-filmes/cadastro-filmes.component";
import { ListagemFilmesComponent } from "./listagem-filmes/listagem-filmes.component";
import { VisualizarFilmeComponent } from "./visuzalizar-filme/visualizar-filme.component";
>>>>>>> 06faf1eb9f5d9aa649c89fc5510451061f42a168

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    CamposModule,
    InfiniteScrollModule
  ],
<<<<<<< HEAD
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  declarations: [CadastroFilmesComponent, ListagemFilmesComponent, VisualizarComponent]
=======
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    CadastroFilmesComponent,
    ListagemFilmesComponent,
    VisualizarFilmeComponent
  ]
>>>>>>> 06faf1eb9f5d9aa649c89fc5510451061f42a168
})
export class FilmesModule {}
