import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { TokenService } from './services/token.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class AutenticacaoInterceptor implements HttpInterceptor{

  constructor(private tokenService: TokenService){}

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if(this.tokenService.possuiToken()){
      const token = this.tokenService.retornarToken();
      req = req.clone({
        setHeaders: {
          'Authorization': `Bearer ${token}`
        }
      })
    }
    return next.handle(req);
  }

}
