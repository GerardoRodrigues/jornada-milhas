import { Component } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class PerfilComponent {
  perfilComponent = true;
  titulo = 'Olá, '
  tituloBotao = 'ATUALIZAR'

  atualizar(){
    console.log('atualizou bb');
  }

  deslogar(){
    console.log('deslogou bb');
  }
}
