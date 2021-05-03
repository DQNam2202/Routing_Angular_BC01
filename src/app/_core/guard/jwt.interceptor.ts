import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let token = "";
    if(localStorage.getItem('accessToken')){
      token = localStorage.getItem('accessToken');
    }

    const authReq = request.clone({
      headers: request.headers.set('Authorization', `Bearer ${token}`)
    }) 
    return next.handle(authReq)
  }
}
