import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CursosComponent } from './cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';
import { CursosService } from './cursos.service';
import { CursosRoutingModule } from './cursos.routing.module';
import { CursoFormComponent } from './curso-form/curso-form.component';

@NgModule({
    imports: [
        CommonModule,
        CursosRoutingModule,
        FormsModule
    ],
    exports: [],
    declarations: [
        CursosComponent,
        CursoDetalheComponent,
        CursoNaoEncontradoComponent,
        CursoFormComponent
    ],
    providers: [CursosService],
})
export class CursosModule { }
