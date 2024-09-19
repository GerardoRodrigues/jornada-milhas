import { Injectable } from '@angular/core';
import { TokenService } from './token.service';
import { BehaviorSubject } from 'rxjs';
import { PessoaUsuaria } from '../types/types';
import jwt_decode from 'jwt-decode'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userSubject = new BehaviorSubject<PessoaUsuaria | null>(null);

  constructor(private serviceToken: TokenService) {
    if(serviceToken.possuiToken()){
      this.decodificarJWT()
    }
  }

  decodificarJWT(){
    const token = this.serviceToken.retornarToken();
    const user = jwt_decode.jwtDecode(token) as PessoaUsuaria;
    this.userSubject.next(user);
  }

  retornarUser(){
    return this.userSubject.asObservable();
  }

  salvarToken(token: string){
    this.serviceToken.salvarToken(token);
    this.decodificarJWT();
  }

  logout(){
    this.serviceToken.excluirTokem();
    this.userSubject.next(null);
  }

  estaLogado(){
    return this.serviceToken.possuiToken();
  }
}
