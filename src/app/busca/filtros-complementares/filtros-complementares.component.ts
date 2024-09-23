import { Component, EventEmitter, Output } from '@angular/core';
import { PassagensService } from '../services/passagens.service';
import { FormBuscaService } from '../services/form-busca.service';

@Component({
  selector: 'app-filtros-complementares',
  templateUrl: './filtros-complementares.component.html',
  styleUrl: './filtros-complementares.component.css'
})
export class FiltrosComplementaresComponent {
  @Output() realizarBusca = new EventEmitter();

  constructor(protected serviceBusca: FormBuscaService, private servicePassagem: PassagensService){}

  busca(){
    if(!this.serviceBusca.formValido){
      this.serviceBusca.formulario.markAllAsTouched();
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
      return
    }
    this.realizarBusca.emit(this.serviceBusca.obterDados());
  }

  limparFiltro(){
    this.serviceBusca.formulario.patchValue({
      conexoes: null,
      companhias: null,
      precoMin: this.servicePassagem.precoMin,
      precoMax: this.servicePassagem.precoMax
    })
  }
}
