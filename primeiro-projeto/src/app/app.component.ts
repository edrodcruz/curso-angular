import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MeuPrimeiro2Component } from './meu-primeiro2/meu-primeiro2.component';
import { MeuPrimeiroComponent } from './meu-primeiro/meu-primeiro.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    MeuPrimeiro2Component,
    MeuPrimeiroComponent
  ],
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})


export class AppComponent {
  title = 'primeiro-projeto';
}
