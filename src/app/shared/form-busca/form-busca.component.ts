import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormBuscaService } from '../../busca/services/form-busca.service';

@Component({
  selector: 'app-form-busca',
  templateUrl: './form-busca.component.html',
  styleUrl: './form-busca.component.css'
})
export class FormBuscaComponent {
  @Output() realizarBusca = new EventEmitter();

  constructor(protected serviceForm: FormBuscaService){}

  buscar(){
    if(this.serviceForm.formValido){
      const formValue = this.serviceForm.obterDados();
      this.realizarBusca.emit(formValue);
    }else{
      alert('Preencha os campos para buscar');
    }
  }
}
