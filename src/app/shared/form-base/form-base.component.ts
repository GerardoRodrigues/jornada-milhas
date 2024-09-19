import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UnidadeFederativaService } from '../../core/services/unidade-federativa.service';
import { FormularioService } from '../../core/services/formulario.service';

@Component({
  selector: 'app-form-base',
  templateUrl: './form-base.component.html',
  styleUrl: './form-base.component.css'
})
export class FormBaseComponent implements OnInit{
  cadastroForm!: FormGroup;
  estadoControl = new FormControl<UnidadeFederativaService | null>(null, Validators.required);

  @Input() perfilComponent!: boolean;
  @Output() acaoClique: EventEmitter<any> = new EventEmitter<any>()

  constructor(private formBuilder: FormBuilder, private formService: FormularioService){}

  ngOnInit(): void {
      this.cadastroForm = this.formBuilder.group({
        nome: [null, [Validators.required]],
        nascimento: [null, [Validators.required]],
        cpf: [null, [Validators.required]],
        cidade: [null, [Validators.required]],
        email: [null, [Validators.required, Validators.email]],
        senha: [null, [Validators.required, Validators.pattern('^(?=.*[A-Z])(?=.*\d).{5,}$')]],
        genero: ['outro'],
        telefone: [null, [Validators.required]],
        estado: this.estadoControl,
        confirmarEmail: [null, [Validators.required, Validators.email]],
        confirmarSenha: [null, [Validators.required, Validators.pattern('^(?=.*[A-Z])(?=.*\d).{5,}$')]],
        aceitarTermos: [null, [Validators.requiredTrue]]
      })

      this.formService.setCadastro(this.cadastroForm);
  }

  executarAcao(){
    this.acaoClique.emit();
  }
}
