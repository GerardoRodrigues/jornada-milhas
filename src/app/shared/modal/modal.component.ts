import { Component } from '@angular/core';
import { FormBuscaService } from '../../core/services/form-busca.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  constructor(protected service: FormBuscaService){}
}
