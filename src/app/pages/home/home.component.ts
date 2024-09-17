import { Component, OnInit } from '@angular/core';
import { PromocaoService } from '../../core/services/promocao.service';
import { Promocao } from '../../core/types/types';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  
  promocoes!: Promocao[]

  constructor(private servicePromo: PromocaoService){}
  
  ngOnInit(): void {
    this.servicePromo.listar().subscribe(promos => {
      this.promocoes = promos;
    })
  }
}
