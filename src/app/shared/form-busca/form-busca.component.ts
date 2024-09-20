import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormBuscaService } from '../../core/services/form-busca.service';

@Component({
  selector: 'app-form-busca',
  templateUrl: './form-busca.component.html',
  styleUrl: './form-busca.component.css'
})
export class FormBuscaComponent {
  @Output() realizarBusca = new EventEmitter();

  constructor(protected serviceForm: FormBuscaService){}

  buscar(){
    const formValue = this.serviceForm.formulario.value;
    this.realizarBusca.emit(formValue);
  }
}
