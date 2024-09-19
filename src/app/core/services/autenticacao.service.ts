import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { UserService } from './user.service';

interface AuthResponde{
  access_token: string
}

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient, private userService: UserService) { }

  autenticar(email: string, senha: string): Observable<HttpResponse<AuthResponde>>{
    return this.http.post<AuthResponde>(`${this.apiUrl}/auth/login`, {email, senha}, {observe: 'response'}).pipe(
      tap((response) => {
        const authtoken = response.body?.access_token || '';
        this.userService.salvarToken(authtoken);
      })
    )
  }
}
