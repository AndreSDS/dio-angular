<<<<<<< HEAD
import { VisualizarComponent } from './filmes/visualizar/visualizar.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilmesModule } from './filmes/filmes.module';
import { CadastroFilmesComponent } from './filmes/cadastro-filmes/cadastro-filmes.component';
import { ListagemFilmesComponent } from './filmes/listagem-filmes/listagem-filmes.component';
=======
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FilmesModule } from "./filmes/filmes.module";
import { CadastroFilmesComponent } from "./filmes/cadastro-filmes/cadastro-filmes.component";
import { ListagemFilmesComponent } from "./filmes/listagem-filmes/listagem-filmes.component";
import { VisualizarFilmeComponent } from "./filmes/visuzalizar-filme/visualizar-filme.component";
>>>>>>> 06faf1eb9f5d9aa649c89fc5510451061f42a168

const routes: Routes = [
  {
    path: "",
    redirectTo: "filmes",
    pathMatch: "full"
  },
  {
    path: "filmes",
    children: [
      {
        path: "",
        component: ListagemFilmesComponent
      },
      {
<<<<<<< HEAD
        path: ':id',
        component: VisualizarComponent,
        pathMatch: 'full'
      },
      {
        path: 'cadastro',
=======
        path: ":id",
        component: VisualizarFilmeComponent,
        pathMatch: "full"
      },
      {
        path: "cadastro",
>>>>>>> 06faf1eb9f5d9aa649c89fc5510451061f42a168
        component: CadastroFilmesComponent,
        pathMatch: "full"
      }
    ]
  },
  { path: "**", redirectTo: "filmes" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), FilmesModule],
  exports: [RouterModule]
})
export class AppRoutingModule {}
