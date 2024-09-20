import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuscaService } from '../../../core/services/form-busca.service';

@Component({
  selector: 'app-filtros-complementares',
  templateUrl: './filtros-complementares.component.html',
  styleUrl: './filtros-complementares.component.css'
})
export class FiltrosComplementaresComponent {
  @Output() realizarBusca = new EventEmitter();

  constructor(private serviceBusca: FormBuscaService){}

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
}
