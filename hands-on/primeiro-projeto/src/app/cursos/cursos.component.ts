import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cursos',
  imports: [CommonModule],
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.css'
})


export class CursosComponent  {
  NomePortal: string = '';
  cursos: string[] = ['Angular', 'Ext Js', 'Angular'];

  ngOnInit(): void {
    // Método chamado após a inicialização do componente
  }


  constructor() {
    // Inicialização do componente
    this.NomePortal = 'http://loiane.training';
     for (let i = 0; i < this.cursos.length; i++) {
      let curso = this.cursos[i];
}
  } }
