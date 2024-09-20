import { Component, OnInit } from '@angular/core';
import { PassagensService } from '../../core/services/passagens.service';
import { DadosBusca, Passagem } from '../../core/types/types';
import { FormBuscaService } from '../../core/services/form-busca.service';

@Component({
  selector: 'app-busca',
  templateUrl: './busca.component.html',
  styleUrl: './busca.component.css'
})
export class BuscaComponent implements OnInit{

  passagens: Passagem[] = [];

  constructor(private servicePassagem: PassagensService, private serviceBusca: FormBuscaService) {
  }

  ngOnInit(): void {
      const buscaPadrao = {
        data: new Date().toISOString,
        pagina: 1,
        porPagina: 25,
        somenteIda: false,
        passageirosAdultos: 1,
        tipo: "Executiva"
      }

      const busca = this.serviceBusca.formValido ? this.serviceBusca.obterDados() : buscaPadrao

      this.servicePassagem.getPassagens(busca).subscribe(resultado => {
        this.passagens = resultado.resultado
        console.log(this.passagens)
      });
  }

  realizarBusca(ev: DadosBusca){
    this.servicePassagem.getPassagens(ev).subscribe(resultado => {
      this.passagens = resultado.resultado
      console.log(this.passagens)
    });
  }

  busca(ev: any){

  }
}
