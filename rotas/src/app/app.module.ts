import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CursosGuard } from './guards/cursos.guard';
import { AlunosGuard } from './guards/alunos.guard';
import { AuthGuard } from './guards/auth.guard';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
//import { CursoNaoEncontradoComponent } from './cursos/curso-nao-encontrado/curso-nao-encontrado.component';
import { CursoDetalheComponent } from '../../../primeiro-projeto/src/app/cursos/curso-detalhe/curso-detalhe.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';

import { AppRoutingModule } from './app.routing.module';
import { CursosModule } from './cursos/cursos.module';
import { AlunosModule } from './alunos/alunos.module';
import { HomeModule } from './home/home.module';

import { AlunosService } from './alunos/alunos.service';
import { HomeService} from './home/home.service'; 
import { CursosService } from './cursos/cursos.service';
import { AuthService } from './login/auth.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PaginaNaoEncontradaComponent,
    CursoDetalheComponent
  
  ],


  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AlunosModule,
    AppRoutingModule,
    HomeModule,
    CursosModule
    
      ],
  
  providers: [
    AuthService,
    AuthGuard,
    CursosGuard,
    AlunosGuard,
    CursosService,
    AlunosService,
    HomeService,   
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
