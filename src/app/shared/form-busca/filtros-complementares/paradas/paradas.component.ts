import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormBuscaService } from '../../../../core/services/form-busca.service';

interface OpcoesDeParada{
  display: string,
  value: string
}

@Component({
  selector: 'app-paradas',
  templateUrl: './paradas.component.html',
  styleUrl: './paradas.component.css'
})
export class ParadasComponent implements OnInit{
  opcoes: OpcoesDeParada[] = [
    {
      display: "Direto",
      value: "0"
    },
    {
      display: "1 conexão",
      value: "1"
    },
    {
      display: "2 conexões",
      value: "2"
    },
    {
      display: "Mais de 2 conexões",
      value: "3"
    },
  ]

  opcoesSelecionadas: OpcoesDeParada | null = null

  conexoesControl: FormControl<number | null>

  constructor(private serviceFormBusca: FormBuscaService){
    this.conexoesControl = serviceFormBusca.obterControle<number>('conexoes');
  }

  ngOnInit(): void {
      this.conexoesControl.valueChanges.subscribe(value => {
        if(value === null){
          this.opcoesSelecionadas = null;
        }
      })
  }

  alternarParada(opcao: OpcoesDeParada, checked: boolean){
    if(!checked){
      this.opcoesSelecionadas = null;
      this.serviceFormBusca.formulario.patchValue({
        conexoes: null
      })
      return
    }
    this.opcoesSelecionadas = opcao
    this.serviceFormBusca.formulario.patchValue({
      conexoes: Number(opcao.value)
    })
  }

  paradaSelecionada(opcao: OpcoesDeParada){
    return this.opcoesSelecionadas === opcao;
  }

  incluirParada(opcao: OpcoesDeParada){
    if(!this.opcoesSelecionadas){
      return false
    }
    return this.opcoesSelecionadas.value > opcao.value
  }
}
