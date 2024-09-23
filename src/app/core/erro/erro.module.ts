import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { SharedModule } from '../../shared/shared.module';
import { ErroRoutingModule } from './erro-routing.module';

@NgModule({
  declarations: [
    PaginaNaoEncontradaComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    ErroRoutingModule
  ]
})
export class ErroModule { }