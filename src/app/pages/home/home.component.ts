import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PromocaoService } from '../../core/services/promocao.service';
import { Depoimento, Promocao } from '../../core/types/types';
import { DepoimentosService } from '../../core/services/depoimentos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  
  promocoes!: Promocao[]
  depoimentos!: Depoimento[]

  constructor(private servicePromo: PromocaoService, private serviceDepo: DepoimentosService, private router: Router){}
  
  ngOnInit(): void {
    this.servicePromo.listar().subscribe(promos => {
      this.promocoes = promos;
    })
    this.serviceDepo.listar().subscribe(depos => {
      this.depoimentos = depos;
    })
  }

  navegarParaBusca(ev: any){
    this.router.navigateByUrl('/busca')
  }
}
