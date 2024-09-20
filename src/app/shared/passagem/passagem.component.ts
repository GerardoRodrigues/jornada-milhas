import { Component, Input } from '@angular/core';
import { Passagem } from '../../core/types/types';

@Component({
  selector: 'app-passagem',
  templateUrl: './passagem.component.html',
  styleUrl: './passagem.component.css'
})
export class PassagemComponent {
  @Input() passagem!: Passagem;

  get textoIdaVolta(){
    if(this.passagem.dataVolta){
      return "Ida e volta"
    }
      return "Somente ida"
  }
}
