import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { MeuPrimeiroComponent } from './meu-primeiro/meu-primeiro.component';
import { MeuPrimeiro2Component } from './meu-primeiro2/meu-primeiro2.component';
import { CursosModule } from './cursos/cursos.module';

// Defina suas rotas aqui
const routes: Routes = [
  // { path: '', component: HomeComponent },
  // { path: 'about', component: AboutComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    MeuPrimeiroComponent,
    MeuPrimeiro2Component

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    MeuPrimeiroComponent,
    MeuPrimeiro2Component,
    CursosModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
