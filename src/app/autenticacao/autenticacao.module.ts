import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';
import { PerfilComponent } from './perfil/perfil.component';
import { MaterialModule } from '../core/material/material.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    CadastroComponent,
    LoginComponent,
    PerfilComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule
  ],
  exports:[
    CadastroComponent,
    LoginComponent,
    PerfilComponent
  ]
})
export class AutenticacaoModule { }
