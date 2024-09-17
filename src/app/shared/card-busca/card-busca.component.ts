import { Component, Input } from '@angular/core';
import { Promocao } from '../../core/types/types';

@Component({
  selector: 'app-card-busca',
  templateUrl: './card-busca.component.html',
  styleUrl: './card-busca.component.css'
})
export class CardBuscaComponent {
  @Input() promocao!: Promocao;
}
