import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { MeuPrimeiroComponent } from './meu-primeiro/meu-primeiro.component';
import { MeuPrimeiro2Component } from './meu-primeiro2/meu-primeiro2.component';
import { CursosComponent } from './cursos/cursos.component';
import { CursosDetalheComponent } from './cursos/cursos-detalhe/cursos-detalhe.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MeuPrimeiroComponent,MeuPrimeiro2Component,CursosComponent,CursosDetalheComponent],
  templateUrl: 'app.component.html',
  styleUrl: 'app.component.css'
})
export class AppComponent {
  title = 'primeiro-projeto';
}
