import { Component, Input, OnInit } from '@angular/core';
import { UnidadeFederativaService } from '../../core/services/unidade-federativa.service';
import { UnidadeFederativa } from '../../core/types/types';
import { FormControl } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';

@Component({
  selector: 'app-dropdown-uf',
  templateUrl: './dropdown-uf.component.html',
  styleUrl: './dropdown-uf.component.css'
})
export class DropdownUfComponent implements OnInit{
  @Input() label: string = '';
  @Input() matPrefix: string = '';
  @Input() placeholder: string = '';
  @Input() control!: FormControl;

  unidadesFederativas: UnidadeFederativa[] = [];

  filteredOptions$?: Observable<UnidadeFederativa[]>;
 

  constructor(private service: UnidadeFederativaService){

  }

  ngOnInit(): void {
    this.service.listar().subscribe(dados => {
      this.unidadesFederativas = dados;
    })
    this.filteredOptions$ = this.control.valueChanges.pipe(
      startWith(''),
      map(value => this.filtrarUfs(value))
    )
  }

  filtrarUfs(value: string | UnidadeFederativa): UnidadeFederativa[] {
    const nomeUF = typeof value === 'string' ? value : value?.nome;
    const valorFiltrado = nomeUF?.toLowerCase();
    const result = this.unidadesFederativas.filter(
      estado => estado.nome.toLowerCase().includes(valorFiltrado)
    )
    return result
  }

  displayFn(estado: UnidadeFederativa): string {
    return estado && estado.nome ? estado.nome : '';
  }
}
