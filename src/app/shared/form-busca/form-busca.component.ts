import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { FormBuscaService } from '../../core/services/form-busca.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-busca',
  templateUrl: './form-busca.component.html',
  styleUrl: './form-busca.component.css'
})
export class FormBuscaComponent {
  readonly dialog = inject(MatDialog);

  constructor(protected serviceForm: FormBuscaService){}

  openDialog() {
    this.dialog.open(ModalComponent);
  }
}
