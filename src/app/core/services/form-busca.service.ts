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
    })
   }
}
