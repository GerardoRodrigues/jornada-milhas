import { Component } from '@angular/core';
import { PassagensService } from '../../services/passagens.service';
import { FormControl } from '@angular/forms';
import { FormBuscaService } from '../../services/form-busca.service';

@Component({
  selector: 'app-precos',
  templateUrl: './precos.component.html',
  styleUrl: './precos.component.css'
})
export class PrecosComponent {
  precoMin: FormControl<number>
  precoMax: FormControl<number>

  constructor(protected servicePassagem: PassagensService, private serviceFormBusca: FormBuscaService){
    this.precoMin = this.serviceFormBusca.obterControle<number>('precoMin')
    this.precoMax = this.serviceFormBusca.obterControle<number>('precoMax')
  }
}
