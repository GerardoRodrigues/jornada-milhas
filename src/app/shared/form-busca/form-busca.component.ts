import { Component, inject } from '@angular/core';
import { FormBuscaService } from '../../core/services/form-busca.service';

@Component({
  selector: 'app-form-busca',
  templateUrl: './form-busca.component.html',
  styleUrl: './form-busca.component.css'
})
export class FormBuscaComponent {

  constructor(protected serviceForm: FormBuscaService){}

  buscar(){
    console.log(this.serviceForm.formulario.value)
  }
}
