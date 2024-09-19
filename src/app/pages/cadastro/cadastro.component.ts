import { Component } from '@angular/core';
import { FormularioService } from '../../core/services/formulario.service';
import { CadastroService } from '../../core/services/cadastro.service';
import { PessoaUsuaria } from '../../core/types/types';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {
  perfilComponent = false;

  constructor(private formService: FormularioService, private cadastroService: CadastroService, private router: Router){
  }

  cadastrar(){
    const form = this.formService.getCadastro();
    
    if(form?.valid){
      const novoForm = form.getRawValue() as PessoaUsuaria;
      this.cadastroService.cadastrar(novoForm).subscribe({
        next: valor => {
          console.log('cadastro ok', valor);
          this.router.navigateByUrl('/login');
        },
        error: erro => {
          console.log('cadastro não ok', erro);
        }
      });
    }
  }
}
