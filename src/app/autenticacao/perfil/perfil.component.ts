import { Component, OnInit } from '@angular/core';
import { PessoaUsuaria } from '../../core/types/types';
import { TokenService } from '../services/token.service';
import { CadastroService } from '../services/cadastro.service';
import { FormGroup } from '@angular/forms';
import { FormularioService } from '../../core/services/formulario.service';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class PerfilComponent implements OnInit{
  perfilComponent = true;
  titulo = 'Olá, '
  tituloBotao = 'ATUALIZAR'

  token = '';
  nome = '';
  cadastro!: PessoaUsuaria;
  form?: FormGroup<any> | null;

  constructor(private serviceToken: TokenService, private serviceCadastro: CadastroService, private serviceForm: FormularioService, private router: Router, private serviceUser: UserService){}

  ngOnInit(): void {
      this.token = this.serviceToken.retornarToken();
      this.serviceCadastro.buscar().subscribe(cadastro => {
        this.cadastro = cadastro;
        this.nome = cadastro.nome;
        this.carregarForm();
      })
  }

  carregarForm(){
    this.form = this.serviceForm.getCadastro();
    this.form?.patchValue({
      nome: this.cadastro.nome,
      nascimento: this.cadastro.nascimento,
      cpf: this.cadastro.cpf,
      telefone: this.cadastro.telefone,
      email: this.cadastro.email,
      senha: this.cadastro.senha,
      genero: this.cadastro.genero,
      cidade: this.cadastro.cidade,
      estado: this.cadastro.estado
    })
  }

  atualizar(){
    const dadosAtualizados = {
      nome: this.form?.value.nome,
      nascimento: this.form?.value.nascimento,
      cpf: this.form?.value.cpf,
      telefone: this.form?.value.telefone,
      email: this.form?.value.email,
      senha: this.form?.value.senha,
      genero: this.form?.value.genero,
      cidade: this.form?.value.cidade,
      estado: this.form?.value.estado
    }
    this.serviceCadastro.editar(dadosAtualizados).subscribe({
      next: () => {
        alert('Cadastro atualizado com sucesso!')
        this.router.navigateByUrl('/')
      }
    })
  }

  deslogar(){
    this.serviceUser.logout();
    this.router.navigateByUrl('/login');
  }
}
