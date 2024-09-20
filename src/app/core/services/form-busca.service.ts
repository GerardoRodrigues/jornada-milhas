import { inject, Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalComponent } from '../../shared/modal/modal.component';
import { MatDialog } from '@angular/material/dialog';
import { MatChipSelectionChange } from '@angular/material/chips';
import { DadosBusca } from '../types/types';

@Injectable({
  providedIn: 'root'
})
export class FormBuscaService {
  readonly dialog = inject(MatDialog);

  formulario: FormGroup;

  constructor() {
    const somenteIda = new FormControl(false, [Validators.required])
    const dataVolta = new FormControl(null, [Validators.required]) 

    this.formulario = new FormGroup({
      somenteIda,
      origem: new FormControl(null, [Validators.required]),
      destino: new FormControl(null, [Validators.required]),
      tipo: new FormControl('Econômica'),
      adultos: new FormControl(1),
      criancas: new FormControl(0),
      bebes: new FormControl(0),
      dataIda: new FormControl(null, [Validators.required]),
      dataVolta
    })

    somenteIda.valueChanges.subscribe(somenteIda => {
      if(somenteIda){
        dataVolta.disable();
        dataVolta.setValidators(null);
      }else{
        dataVolta.enable();
        dataVolta.setValidators([Validators.required])
      }
      dataVolta.updateValueAndValidity();
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

   obterControle<T>(nome:string): FormControl {
    const control = this.formulario.get(nome);
    if (!control) {
      throw new Error(`FormControl com nome "${nome}" não existe.`);
    }
    return control as FormControl<T>;
  }

  obterDados(): DadosBusca{
    const dataIdaControl = this.obterControle<Date>('dataIda').value;

    const dadosBusca : DadosBusca = {
      pagina: 1,
      porPagina: 50,
      somenteIda: this.obterControle<boolean>('somenteIda').value,
      origemId: this.obterControle<number>('origem').value.id,
      destinoId: this.obterControle<number>('destino').value.id,
      tipo: this.obterControle<string>('tipo').value,
      passageirosAdultos: this.obterControle<number>('adultos').value,
      passageirosCriancas: this.obterControle<number>('criancas').value,
      passageirosBebes: this.obterControle<number>('bebes').value,
      dataIda: dataIdaControl.value.toISOString()
    }

    const dataVoltaControl = this.obterControle<Date>('dataVolta').value;
    if(dataVoltaControl.value){
      dadosBusca.dataVolta = dataVoltaControl.value.toISOString();
    }

    return dadosBusca;
  }

  alterarTipo(event: MatChipSelectionChange, tipo: string){
    if(event.selected){
      this.formulario.patchValue({
        tipo
      })
    }
  }

  openDialog() {
    this.dialog.open(ModalComponent);
  }

  get formValido(){
    return this.formulario.valid;
  }
}
