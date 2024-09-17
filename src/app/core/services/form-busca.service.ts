import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormBuscaService {

  formulario: FormGroup;

  constructor() {
    this.formulario = new FormGroup({
      somenteIda: new FormControl(false),
      origem: new FormControl(),
      destino: new FormControl()
    })
   }

   obterControle(nome:string): FormControl {
    const control = this.formulario.get(nome);
    if (!control) {
      throw new Error(`FormControl com nome "${nome}" não existe.`);
    }
    return control as FormControl;
  }
}
