import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Resultado } from '../types/types';

@Injectable({
  providedIn: 'root'
})
export class PassagensService {
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getPassagens(search: any): Observable<Resultado>{
    const params = search;
    return this.http.get<Resultado>(this.apiUrl + '/passagem/search', {params});
  }
}
