import { inject, Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ModalComponent } from '../../shared/modal/modal.component';
import { MatDialog } from '@angular/material/dialog';
import { MatChipSelectionChange } from '@angular/material/chips';

@Injectable({
  providedIn: 'root'
})
export class FormBuscaService {
  readonly dialog = inject(MatDialog);

  formulario: FormGroup;

  constructor() {
    this.formulario = new FormGroup({
      somenteIda: new FormControl(false),
      origem: new FormControl(null),
      destino: new FormControl(null),
      tipo: new FormControl('Econômica'),
      adultos: new FormControl(1),
      criancas: new FormControl(0),
      bebes: new FormControl(0)
    })
   }

   descricaoPassageiros(): string{
    let descricao = '';

    const adultos = this.formulario.get('adultos')?.value;
    if(adultos && adultos === 1){
      descricao += '1 adulto'
    } else if(adultos > 1){
      descricao += `${adultos} adultos`
    }

    const criancas = this.formulario.get('criancas')?.value;
    if(criancas && criancas === 1){
      descricao += ', 1 criança'
    }else if(criancas > 1){
      descricao += `, ${criancas} crianças`
    }

    const bebes = this.formulario.get('bebes')?.value;
    if(bebes && bebes === 1){
      descricao += ' e 1 bebê.'
    }else if(bebes > 1){
      descricao += ` e ${bebes} bebês.`
    }

    return descricao
   }

   obterControle(nome:string): FormControl {
    const control = this.formulario.get(nome);
    if (!control) {
      throw new Error(`FormControl com nome "${nome}" não existe.`);
    }
    return control as FormControl;
  }

  alterarTipo(event: MatChipSelectionChange, tipo: string){
    if(event.selected){
      this.formulario.patchValue({
        tipo
      })
    }
    console.log(tipo)
  }

  openDialog() {
    this.dialog.open(ModalComponent);
  }
}
