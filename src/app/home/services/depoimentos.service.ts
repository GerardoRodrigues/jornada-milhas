import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Depoimento } from '../../core/types/types';

@Injectable({
  providedIn: 'root'
})
export class DepoimentosService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  listar(): Observable<Depoimento[]>{
    return this.http.get<Depoimento[]>(`${this.apiUrl}/depoimentos`)
  }
}
