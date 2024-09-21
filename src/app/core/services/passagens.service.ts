import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DadosBusca, Resultado } from '../types/types';

@Injectable({
  providedIn: 'root'
})
export class PassagensService {
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getPassagens(search: DadosBusca): Observable<Resultado>{
    const params = this.converterParametroParaString(search);
    return this.http.get<Resultado>(this.apiUrl + '/passagem/search?' + params);
  }

  converterParametroParaString(busca: DadosBusca){
    const query = Object.entries(busca).map(([key, value]) => {
      if(!value){
        return ''
      }
      return `${key}=${value}`
    })
    .join('&')

    return query;
  }
}
