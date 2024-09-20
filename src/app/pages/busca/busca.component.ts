import { Component, OnInit } from '@angular/core';
import { PassagensService } from '../../core/services/passagens.service';
import { Passagem } from '../../core/types/types';

@Component({
  selector: 'app-busca',
  templateUrl: './busca.component.html',
  styleUrl: './busca.component.css'
})
export class BuscaComponent implements OnInit{

  passagens: Passagem[] = [];

  constructor(private servicePassagem: PassagensService) {
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
      this.servicePassagem.getPassagens(buscaPadrao).subscribe(resultado => {
        this.passagens = resultado.resultado
        console.log(this.passagens)
      });
  }
}
