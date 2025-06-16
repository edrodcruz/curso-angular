import { NgModule,ModuleWithProviders, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CursosComponent } from './cursos/cursos.component';
import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component';
import { CursoNaoEncontradoComponent } from './cursos/curso-nao-encontrado/curso-nao-encontrado.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { AlunosComponent } from './alunos/alunos.component';
import { AuthGuard } from './guards/auth.guard';
import { AlunosGuard } from './guards/alunos.guard';
import { CursosGuard } from './guards/cursos.guard';

//import { CursosModule } from './cursos/cursos.module';
//import { AlunosModule } from './alunos/alunos.module';
// Removed duplicate import of CursosComponent

const appRoutes: Routes = [
/*  { path: 'cursos',
    //loadChildren: 'app/cursos/cursos.module#CursosModule',
    canActivate: [AuthGuard],
    canActivateChild: [CursosGuard],
    canLoad: [AuthGuard]
},
{ path: 'alunos',
    //loadChildren: 'app/alunos/alunos.module#AlunosModule',
    canActivate: [AuthGuard],
    canActivateChild: [AlunosGuard],
    canLoad: [AuthGuard]
},*/
//{ path: 'cursos', component: CursosModule },
//{ path: 'alunos', component: AlunosModule },
{ path: '', component: LoginComponent },
{ path: 'home', component: HomeComponent/*,canActivate: [AuthGuard] */ },
{ path: 'cursos', component: CursosComponent ,canActivate: [AuthGuard],
  canActivateChild: [CursosGuard],
  canLoad: [AuthGuard]},
{ path: 'curso/:id', component: CursoDetalheComponent },
{ path: 'alunos', component: AlunosComponent , canActivate: [AuthGuard],
    canActivateChild: [AlunosGuard],
    canLoad: [AuthGuard]},

{ path: 'naoEncontrado', component: CursoNaoEncontradoComponent },
{ path: '', redirectTo: '/home', pathMatch: 'full' },
{ path: '**', component: PaginaNaoEncontradaComponent  /*, canActivate: [AuthGuard] */}
];;

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule {}
