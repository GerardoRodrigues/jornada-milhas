import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Promocao } from '../../core/types/types';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PromocaoService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  listar() : Observable<Promocao[]>{
    return this.http.get<Promocao[]>(`${this.apiUrl}/promocoes`);
  }
}
