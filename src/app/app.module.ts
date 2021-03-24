import { ProdutosModule } from './produtos/produtos.module';
import { PessoasModule } from './pessoas/pessoas.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TemplateModule } from './template/template.module';
import { HomeComponent } from './home/home.component'
import { ClientesModule } from './clientes/clientes.module';
import { VeiculosModule } from './veiculos/veiculos.module';
import { ClientesService } from './clientes/clientes.service'
import { ServicoPrestadoModule } from './servico-prestado/servico-prestado.module'
import { ServicoPrestadoService } from './servico-prestado/servico-prestado.service';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component'
import { AuthService } from './auth.service';
import { TokenInterceptor } from './token.interceptor';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { NaoTemPermissaoComponent } from './nao-tem-permissao/nao-tem-permissao.component';
import { GeografiaModule } from './geografia/geografia.module';
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

registerLocaleData(localePt);



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    LayoutComponent,
    PaginaNaoEncontradaComponent,
    NaoTemPermissaoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    TemplateModule,
    ClientesModule,
    ServicoPrestadoModule,
    VeiculosModule,
    PessoasModule,
    GeografiaModule,
    ProdutosModule,
    NoopAnimationsModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    ClientesService,
    ServicoPrestadoService,
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
