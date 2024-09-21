import { Component } from '@angular/core';
import { PassagensService } from '../../../../core/services/passagens.service';
import { FormBuscaService } from '../../../../core/services/form-busca.service';
import { FormControl } from '@angular/forms';

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
