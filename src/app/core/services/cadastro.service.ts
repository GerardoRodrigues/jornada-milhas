import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { PessoaUsuaria } from '../types/types';
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

  buscar(token: string): Observable<PessoaUsuaria>{
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    })
    return this.http.get<PessoaUsuaria>(`${this.apiUrl}/auth/perfil`, {headers})
  }

  editar(user: PessoaUsuaria, token: string): Observable<PessoaUsuaria>{
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    })
    return this.http.patch<PessoaUsuaria>(`${this.apiUrl}/auth/perfil`, user, {headers})
  }
}
