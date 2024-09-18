import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AutenticacaoService } from '../../core/services/autenticacao.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  loginForm!: FormGroup

  constructor(private formBuilder: FormBuilder, private service: AutenticacaoService, private router: Router) {}

  ngOnInit(): void {
      this.loginForm = this.formBuilder.group({
        email: [null, [Validators.required, Validators.email]],
        senha: [null, [Validators.required, Validators.pattern('^(?=.*[A-Z])(?=.*\d).{5,}$')]]
      })
  }

  login(){
    const email = this.loginForm.value.email;
    const senha = this.loginForm.value.senha;

    this.service.autenticar(email, senha).subscribe({
      next: value => {
        console.log('Login', value);
        this.router.navigateByUrl('/');
      },
      error: erro => {
        console.log('Erro', erro);
      }
    })
  }
}
