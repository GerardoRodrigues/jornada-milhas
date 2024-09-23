import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { MensagemService } from '../services/mensagem.service';

@Injectable()
export class ErrosInterceptor implements HttpInterceptor{

  constructor(private serviceMensagem: MensagemService){}

  intercept(req: HttpRequest<HttpErrorResponse>, next: HttpHandler): Observable<HttpEvent<HttpErrorResponse>> {

    return next.handle(req).pipe(
      catchError((erro: HttpErrorResponse) => {

        let errorMessage = 'Ocorreu um erro desconhecido';

        if(erro.error instanceof ErrorEvent){
          errorMessage = `Erro do cliente: ${erro.error.message}`
        } else if(erro.status === 404){
          errorMessage = 'Recurso não encontrado'
        }else if(erro.status === 500){
          errorMessage = 'Erro interno do servidor' 
        }else if(erro.status === 401){
          errorMessage = 'Você não tem autorização para acessar esse recurso'
        }

        this.serviceMensagem.openSnackBar(errorMessage);

        return throwError(() => new Error('Ocorreu um erro!'));
      })
    );
  }
}
