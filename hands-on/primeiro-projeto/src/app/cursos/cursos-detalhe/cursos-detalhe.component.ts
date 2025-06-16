import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos-detalhe',
  imports: [],
  templateUrl: './cursos-detalhe.component.html',
  styleUrl: './cursos-detalhe.component.css'
})
export class CursosDetalheComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    console.log('CursosDetalheComponent initialized');
  }

}
