import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { CadastroClientesComponent } from './cadastro-clientes/cadastro-clientes.component';
import { HomeLogadaComponent } from './home-logada/home-logada.component';
import { HttpClientModule } from '@angular/common/http';
import { CadastroConcluidoComponent } from './cadastro-concluido/cadastro-concluido.component';
import { AcessoNegadoComponent } from './acesso-negado/acesso-negado.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    CadastroClientesComponent,
    HomeLogadaComponent,
    CadastroConcluidoComponent,
    AcessoNegadoComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers : [],
  bootstrap : [AppComponent],
  schemas   : [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
 }
