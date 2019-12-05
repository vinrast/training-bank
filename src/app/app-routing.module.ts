import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContentComponent } from './content/content.component';
import { CadastroClientesComponent } from './cadastro-clientes/cadastro-clientes.component';
import { AuthGuard } from './auth.guard';
import { AcessoNegadoComponent } from './acesso-negado/acesso-negado.component';
import { HomeLogadaComponent } from './home-logada/home-logada.component';



const routes: Routes = [
  {
    path        : '',
    component   : ContentComponent
  },
  { 
    path        : 'cadastro',
    component   : CadastroClientesComponent
  },
  {
    path        : 'home-logada',
    component   : HomeLogadaComponent,
    canActivate : [AuthGuard]
  },
  {
    path        : 'acesso-negado',
    component   : AcessoNegadoComponent
  }
];

@NgModule({
  imports : [RouterModule.forRoot(routes)],
  exports : [RouterModule]
})
export class AppRoutingModule { }
