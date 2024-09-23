import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UnidadeFederativaService } from '../../core/services/unidade-federativa.service';
import { FormularioService } from '../../core/services/formulario.service';
import { FormValidation } from '../form-validation';

@Component({
  selector: 'app-form-base',
  templateUrl: './form-base.component.html',
  styleUrl: './form-base.component.css'
})
export class FormBaseComponent implements OnInit{
  cadastroForm!: FormGroup;
  estadoControl = new FormControl<UnidadeFederativaService | null>(null, Validators.required);

  @Input() perfilComponent!: boolean;
  @Input() titulo: string = 'Crie sua conta'
  @Input() tituloBotao: string = 'CADASTRAR'
  @Output() acaoClique: EventEmitter<void> = new EventEmitter<void>()
  @Output() deslogarClique: EventEmitter<void> = new EventEmitter<void>()

  constructor(private formBuilder: FormBuilder, private formService: FormularioService){}

  ngOnInit(): void {
      this.cadastroForm = this.formBuilder.group({
        nome: [null, [Validators.required]],
        nascimento: [null, [Validators.required]],
        cpf: [null, [Validators.required]],
        cidade: [null, [Validators.required]],
        email: [null, [Validators.required, Validators.email]],
        senha: [null, [Validators.required, Validators.minLength(4)]],
        genero: ['outro'],
        telefone: [null, [Validators.required]],
        estado: this.estadoControl,
        confirmarEmail: [null, [Validators.required, Validators.email, FormValidation.equalTo('email')]],
        confirmarSenha: [null, [Validators.required, Validators.minLength(4), FormValidation.equalTo('senha')]],
        aceitarTermos: [null, [Validators.requiredTrue]]
      })

      if(this.perfilComponent){
        this.cadastroForm.get('aceitarTermos')?.setValidators(null);
      }else{
        this.cadastroForm.get('aceitarTermos')?.setValidators([Validators.requiredTrue]);
      }

      this.cadastroForm.get('aceitarTermos')?.updateValueAndValidity();

      this.formService.setCadastro(this.cadastroForm);
  }

  executarAcao(){
    this.acaoClique.emit();
  }

  deslogar(){
    this.deslogarClique.emit();
  }
}
