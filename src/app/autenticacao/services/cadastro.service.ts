import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { PessoaUsuaria } from '../../core/types/types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  cadastrar(pessoa: PessoaUsuaria): Observable<PessoaUsuaria>{
    return this.http.post<PessoaUsuaria>(`${this.apiUrl}/auth/cadastro`, pessoa)
  }

  buscar(): Observable<PessoaUsuaria>{
    return this.http.get<PessoaUsuaria>(`${this.apiUrl}/auth/perfil`)
  }

  editar(user: PessoaUsuaria): Observable<PessoaUsuaria>{
    return this.http.patch<PessoaUsuaria>(`${this.apiUrl}/auth/perfil`, user)
  }
}
