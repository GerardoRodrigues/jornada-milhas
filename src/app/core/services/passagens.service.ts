import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, take } from 'rxjs';
import { DadosBusca, Resultado } from '../types/types';

@Injectable({
  providedIn: 'root'
})
export class PassagensService {
  apiUrl = environment.apiUrl;

  precoMin!: number
  precoMax!: number

  constructor(private http: HttpClient) { }

  getPassagens(search: DadosBusca): Observable<Resultado>{
    const params = this.converterParametroParaString(search);
    const obs = this.http.get<Resultado>(this.apiUrl + '/passagem/search?' + params);
    obs.pipe(take(1)).subscribe(res => {
      this.precoMin = res.precoMin
      this.precoMax = res.precoMax
    })
    return obs;
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
